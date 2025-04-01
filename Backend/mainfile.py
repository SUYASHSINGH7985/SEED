from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import *
from flask import send_from_directory
import os
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)  # Enable CORS with credentials support

@app.route("/")
def serve_react():
    return send_from_directory(os.path.join(os.getcwd(), "frontend/build"), "index.html")

@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(os.path.join(os.getcwd(), "frontend/build"), path)


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
        return jsonify({"error": "User Already exists!"}), 400  # Use proper error status

    return jsonify({"message": "Signup successful!"}), 201  # 201 for created


    

if __name__ == '__main__':
    app.run(debug=True)