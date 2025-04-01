from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import *
app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS with credentials support

@app.route('/signup', methods=['POST', 'OPTIONS'])
def signup():
    if request.method == "OPTIONS":
        # Handle preflight request
        return jsonify({"message": "CORS preflight passed"}), 200

    data = request.json
    email = data.get("email")
    password = data.get("password")
    full_name = data.get("full_name")
    if not email or not password:
        return jsonify({"error": "Email and password are required!"}), 400

    result = insert_user(email,password,full_name)
    if not result:
        return jsonify({"message": "User Already exists!"}), 200

    return jsonify({"message": "Signup successful!"}), 200

@app.route('/signin', methods=['POST', 'OPTIONS'])
def signin():
    if request.method == "OPTIONS":
        # Handle preflight request
        return jsonify({"message": "CORS preflight passed"}), 200

    data = request.json
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"error": "Email and password are required!"}), 400

    result = verify_password(email,password)
    if not result:
        return jsonify({"message": "Incorrect Credentials!"}), 200

    return jsonify({"message": "Sign In Successful!"}), 200

@app.route('/get-companies', methods=['GET'])
def get_companies():
    companies = read_companies()  # Fetch company data
    return jsonify(companies)  # Send as JSON response

    

if __name__ == '__main__':
    app.run(debug=True)