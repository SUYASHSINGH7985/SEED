from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from backend import *
import os
import jwt
from functools import wraps
import secrets

# Initialize the Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)  # Enable CORS for all routes

# Secret key for JWT token generation
SECRET_KEY = "a-very-secret-key" # Hardcoded secret key

# Initialize database
initialize_database()
insert_sample_companies()

# User signup endpoint
@app.route('/signup', methods=['POST', 'OPTIONS'])
def signup():
    """
    Registers a new user using email and password.
    Handles CORS preflight via OPTIONS method.

    Request JSON:
    {
        "email": "user@example.com",
        "password": "secret",
        "name": "Full Name"
    }

    Returns:
        201 if signup is successful,
        400 if user exists or missing fields.
    """
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight passed"}), 200

    data = request.json
    email = data.get("email")
    password = data.get("password")
    full_name = data.get("name")  # "name" maps to full_name

    if not email or not password:
        return jsonify({"error": "Email and password are required!"}), 400

    result = insert_user(email, password, full_name)
    if not result:
        return jsonify({"error": "User already exists!"}), 400

    return jsonify({"message": "Signup successful!"}), 201


# User signin endpoint (login)
@app.route('/signin', methods=['POST'])
def signin():
    """
    Logs in a user by verifying email and password.
    Returns a JWT token if successful.

    Request JSON:
    {
        "email": "user@example.com",
        "password": "secret"
    }

    Returns:
        200 and token if success,
        400 if fields missing,
        401 if credentials invalid.
    """
    data = request.get_json()
    email = data.get('email')  
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    if verify_password(email, password):
        payload = {"user_email": email}
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return jsonify({"message": "Login successful!", "token": token}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401


def decode_token(token):
    """
    Decodes a JWT token to extract user information.

    Args:
        token (str): JWT token.

    Returns:
        dict or None: Decoded data if valid, otherwise None.
    """
    try:
        decoded_data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return decoded_data
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None


# Fetch all companies
@app.route('/get_companies', methods=['GET'])
def get_companies():
    """
    Returns a list of all companies in the database.

    Returns:
        JSON array of company objects.
    """
    companies = read_companies()
    return jsonify(companies)


# Fetch user info based on JWT token
@app.route('/get_user', methods=['GET'])
def get_user():
    """
    Returns the full name of the authenticated user using JWT token.

    Headers:
        Authorization: Bearer <token>

    Returns:
        200 with user's full name if token valid,
        400 if no token,
        401 if invalid token,
        404 if user not found.
    """
    token = request.headers.get('Authorization')

    if not token:
        return jsonify({"message": "No token provided"}), 400

    token = token.split(" ")[1] if "Bearer" in token else token
    user_data = decode_token(token)

    if not user_data:
        return jsonify({"message": "Unauthorized"}), 401

    user_email = user_data['user_email']
    user = get_user_from_db(user_email)

    if user:
        return jsonify({"name": user["full_name"].title()})
    else:
        return jsonify({"message": "User not found"}), 404

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    dist_dir = os.path.join(os.getcwd(), 'dist')
    if path != "" and os.path.exists(os.path.join(dist_dir, path)):
        return send_from_directory(dist_dir, path)
    else:
        return send_from_directory(dist_dir, 'index.html')

# Entry point to run the app
if __name__ == '__main__':
    app.run(debug=True, port=5002)