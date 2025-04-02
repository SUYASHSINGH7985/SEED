from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import *
from flask import send_from_directory
import os
import jwt
from functools import wraps
import secrets

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)  # Enable CORS

SECRET_KEY = secrets.token_hex(24)  # Secure key for JWT tokens

# Serve the frontend React app
@app.route("/")
def serve_react():
    return send_from_directory(os.path.join(os.getcwd(), "frontend/build"), "index.html")

@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(os.path.join(os.getcwd(), "frontend/build"), path)

# Signup endpoint
@app.route('/signup', methods=['POST', 'OPTIONS'])
def signup():
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight passed"}), 200

    data = request.json
    email = data.get("email")
    password = data.get("password")
    full_name = data.get("name")  # Change "full_name" to "name"

    if not email or not password:
        return jsonify({"error": "Email and password are required!"}), 400

    result = insert_user(email, password, full_name)
    if not result:
        return jsonify({"error": "User already exists!"}), 400  # Use proper error status

    return jsonify({"message": "Signup successful!"}), 201  # 201 for created

# Sign-in endpoint (Login)
@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')  
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    if verify_password(email, password):  # Authenticate using email
        # Create JWT token
        payload = {"user_email": email}  # Changed from 'user_id' to 'user_email'
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return jsonify({"message": "Login successful!", "token": token}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

# Decode JWT token to get user info
def decode_token(token):
    try:
        decoded_data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return decoded_data  # This will contain the user data (e.g., email)
    except jwt.ExpiredSignatureError:
        return None  # Token has expired
    except jwt.InvalidTokenError:
        return None  # Invalid token

@app.route('/get_companies', methods=['GET'])
def get_companies():
    companies = read_companies()  # Fetch companies from the database
    return jsonify(companies)  # Return the list as JSON

# Get user info by decoding the JWT token
@app.route('/get_user', methods=['GET'])
def get_user():
    token = request.headers.get('Authorization')

    if not token:
        return jsonify({"message": "No token provided"}), 400

    token = token.split(" ")[1] if "Bearer" in token else token
    user_data = decode_token(token)

    if not user_data:
        return jsonify({"message": "Unauthorized"}), 401

    user_email = user_data['user_email']  # Changed from 'user_id' to 'user_email'
    user = get_user_from_db(user_email)  # Fetch the user from the database using the email

    if user:
        return jsonify({"name": user["full_name"].title()})  # Correct
    else:
        return jsonify({"message": "User not found"}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
