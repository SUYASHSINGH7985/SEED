# backend.py Documentation

This module provides backend functionality for user authentication and company data management using SQLite.  
It includes password hashing, user management, and CRUD operations on company data.

---

## User Management

### `hash_password(password)`

**Description:**  
Hashes a plain-text password using SHA-256.

**Parameters:**  
- `password (str)`: The password to hash.

**Returns:**  
- `str`: The hashed password.

---

### `insert_user(username, password, full_name)`

**Description:**  
Adds a new user to the database after checking for duplicates and hashing the password.

**Parameters:**  
- `username (str)`: Username for the new user.  
- `password (str)`: Plain-text password.  
- `full_name (str)`: Full name of the user.

**Returns:**  
- `bool`: `True` if successful, `False` if the user already exists.

---

### `verify_password(username, password)`

**Description:**  
Verifies whether the input password matches the stored hashed password.

**Parameters:**  
- `username (str)`: Username of the user.  
- `password (str)`: Plain-text password.

**Returns:**  
- `bool`: `True` if password is correct, else `False`.

---

### `read_users()`

**Description:**  
Fetches all users from the database, omitting passwords.

**Returns:**  
- `list[dict]`: List of users with fields `id`, `username`, and `full_name`.

---

### `get_user_from_db(user_id)`

**Description:**  
Retrieves user info by username.

**Parameters:**  
- `user_id (str)`: Username of the user.

**Returns:**  
- `dict or None`: User info dictionary or `None` if not found.

---

## Company Management

### `add_company(...)`

**Description:**  
Adds a new company entry to the database. Creates the table if it doesn't exist.

**Parameters:**  
- `name (str)`: Company name.  
- `sector (str)`: Industry/sector.  
- `intro (str)`: Company introduction.  
- `investors (str)`: Names of investors.  
- `financials_text (str)`: Financial info (text).  
- `financials_num (str)`: Financial info (numbers).  
- `fundamentals (str)`: Business fundamentals.  
- `share_holding (str)`: Public/Private.  
- `company_founding (str)`: Year founded.  
- `company_culture (str)`: Description of culture.  
- `company_emp (str)`: Number of employees.  
- `req (str)`: Job requirements.  
- `email (str)`: Contact email.  
- `ph (str)`: Contact phone number.

---

### `read_companies()`

**Description:**  
Reads and returns all company records from the database.

**Returns:**  
- `list[dict]`: List of company dictionaries with all fields.

---

## Database Initialization

### `initialize_database()`

**Description:**  
Initializes the SQLite database by creating `users` and `companies` tables if they don't exist.

---

## Sample Data

### `insert_sample_companies()`

**Description:**  
Populates the database with a predefined list of sample companies for testing/demo purposes.

---

## Sample Companies

Included sample companies:
- **TechNova** – AI & Machine Learning  
- **GreenFuture** – Renewable Energy  
- **FinTechPro** – Financial Services  
- **EduNext** – EdTech  
- **MediCore** – Healthcare Tech

---

## Notes

- Database file: `user_credentials.db`  
- Uses SQLite, no external dependencies  
- Passwords are securely hashed using SHA-256  
- Extendable for use in Flask or FastAPI-based APIs

# mainfile.py Documentation

To be added