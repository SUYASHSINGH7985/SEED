import sqlite3
import hashlib

# ----------------------------- Utility Functions -----------------------------

def hash_password(password):
    """
    Hashes a password using SHA-256 algorithm.

    Args:
        password (str): The plain-text password.

    Returns:
        str: The hashed password as a hexadecimal string.
    """
    return hashlib.sha256(password.encode()).hexdigest()

# ----------------------------- User Management ------------------------------

def insert_user(username, password, full_name):
    """
    Inserts a new user into the database after checking for duplicates and hashing the password.

    Args:
        username (str): The username for the new user.
        password (str): The plain-text password.
        full_name (str): Full name of the user.

    Returns:
        bool: True if user was inserted successfully, False if the username already exists.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()

    # Check if the username already exists
    c.execute("SELECT * FROM users WHERE username=?", (username,))
    user = c.fetchone()

    if user:
        conn.close()
        return False  # User already exists

    # Hash the password before storing
    hashed_password = hash_password(password)
    c.execute("INSERT INTO users (username, password, full_name) VALUES (?, ?, ?)", 
              (username, hashed_password, full_name))
    conn.commit()
    conn.close()
    return True

def verify_password(username, password):
    """
    Verifies a user's login by comparing the hashed password with the stored hash.

    Args:
        username (str): The username.
        password (str): The plain-text password to verify.

    Returns:
        bool: True if password matches, False otherwise.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()

    # Get stored password hash for the username
    c.execute("SELECT password FROM users WHERE username=?", (username,))
    user = c.fetchone()

    if user:
        stored_password = user[0]
        if stored_password == hash_password(password):
            conn.close()
            return True  # Password matches
        else:
            conn.close()
            return False  # Password doesn't match
    else:
        conn.close()
        return False  # User not found

# ----------------------------- Company Management ----------------------------

def add_company(name, sector, intro, investors, financials_text, financials_num, fundamentals, 
                share_holding, company_founding, company_culture, company_emp, req, email, ph):
    """
    Adds a new company to the database, and creates the table if it doesn't exist.

    Args:
        name (str): Company name.
        sector (str): Sector/industry.
        intro (str): Brief introduction of the company.
        investors (str): List of investors.
        financials_text (str): Textual financial info.
        financials_num (str): Numerical financial info.
        fundamentals (str): Key business fundamentals.
        share_holding (str): Shareholding type (e.g. Public/Private).
        company_founding (str): Founding year.
        company_culture (str): Description of work culture.
        company_emp (str): Number of employees.
        req (str): Job requirements or openings.
        email (str): Contact email.
        ph (str): Contact phone number.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()

    # Check if companies table exists, if not, create it
    c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='companies';")
    if not c.fetchone():
        c.execute('''CREATE TABLE companies (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        sector TEXT NOT NULL,
                        intro TEXT,
                        investors TEXT,
                        financials_text TEXT,
                        financials_num TEXT,
                        fundamentals TEXT,
                        share_holding TEXT,
                        company_founding TEXT,
                        company_culture TEXT,
                        company_emp TEXT,
                        req TEXT,
                        email TEXT,
                        ph TEXT
                    )''')
        conn.commit()

    # Insert company data into the companies table
    c.execute('''INSERT INTO companies (name, sector, intro, investors, financials_text, financials_num, fundamentals, 
                                        share_holding, company_founding, company_culture, company_emp, req, email, ph) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', 
              (name, sector, intro, investors, financials_text, financials_num, fundamentals, 
               share_holding, company_founding, company_culture, company_emp, req, email, ph))
    
    conn.commit()
    conn.close()

def read_companies():
    """
    Reads and returns all company records from the database.

    Returns:
        list: A list of dictionaries, each representing a company.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    
    # Query to select all rows from the companies table
    c.execute("SELECT * FROM companies")
    companies = c.fetchall()  # Fetch all rows
    
    if not companies:
        conn.close()
        return []  # Return an empty list if no companies found
    
    # Structure the data
    company_list = []
    for company in companies:
        company_info = {
            "id": company[0],
            "name": company[1],
            "sector": company[2],
            "intro": company[3],
            "investors": company[4],
            "financials_text": company[5],
            "financials_num": company[6],
            "fundamentals": company[7],
            "share_holding": company[8],
            "company_founding": company[9],
            "company_culture": company[10],
            "company_emp": company[11],
            "req": company[12],
            "email": company[13],
            "ph": company[14]
        }
        company_list.append(company_info)
    
    conn.close()
    return company_list

# ----------------------------- User Retrieval ----------------------------

def read_users():
    """
    Reads all users from the database without exposing their passwords.

    Returns:
        list: A list of dictionaries containing user id, username, and full name.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()

    # Query to select all rows from the users table
    c.execute("SELECT * FROM users")
    users = c.fetchall()  
    
    if not users:
        conn.close()
        return []  # Return an empty list if no users found
    
    # Structure the data, omitting the password for security
    user_list = []
    for user in users:
        user_info = {
            "id": user[0],
            "username": user[1],
            "full_name": user[3]  # Do not include password in the response
        }
        user_list.append(user_info)
    
    conn.close()
    return user_list

def get_user_from_db(user_id):
    """
    Fetches user details using the username.

    Args:
        user_id (str): The username (used as user_id here).

    Returns:
        dict or None: User info if found, otherwise None.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()

    # Fetch user details by username (assuming user_id is the username)
    c.execute("SELECT * FROM users WHERE username=?", (user_id,))
    user = c.fetchone()

    if user:
        user_info = {
            "id": user[0],
            "username": user[1],
            "full_name": user[3]
        }
        conn.close()
        return user_info  # Return the user info as a dictionary
    else:
        conn.close()
        return None  # Return None if the user is not found

# ----------------------------- Database Initialization ----------------------------

def initialize_database():
    """
    Creates the users and companies tables in the database if they do not exist.
    """
    conn = sqlite3.connect("user_credentials.db")  # Connect to the database
    c = conn.cursor()
    
    # Create Users Table
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            full_name TEXT NOT NULL
        )
    """)

    # Create Companies Table
    c.execute("""
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            sector TEXT NOT NULL,
            intro TEXT,
            investors TEXT,
            financials_text TEXT,
            financials_num TEXT,
            fundamentals TEXT,
            share_holding TEXT,
            company_founding TEXT,
            company_culture TEXT,
            company_emp TEXT,
            req TEXT,
            email TEXT,
            ph TEXT
        )
    """)

    conn.commit()
    conn.close()
    print("Database initialized successfully!")

# ----------------------------- Sample Data Insertion ----------------------------

# Sample companies to populate the database
sample_companies = [
    {
        "name": "TechNova",
        "sector": "AI & Machine Learning",
        "intro": "Pioneering AI-driven analytics solutions.",
        "investors": "Sequoia Capital, SoftBank",
        "financials_text": "Strong revenue growth with increasing ARR.",
        "financials_num": "500 Cr",
        "fundamentals": "AI-powered automation for enterprises.",
        "share_holding": "Private",
        "company_founding": "2018",
        "company_culture": "Innovation-focused, remote-first.",
        "company_emp": "250",
        "req": "Hiring for AI Engineers",
        "email": "contact@technova.com",
        "ph": "+91-9876543210"
    },
    {
        "name": "GreenFuture",
        "sector": "Renewable Energy",
        "intro": "Revolutionizing solar energy for urban spaces.",
        "investors": "Tiger Global, Accel Partners",
        "financials_text": "Steady investment growth with positive cash flow.",
        "financials_num": "750 Cr",
        "fundamentals": "Sustainable energy solutions.",
        "share_holding": "Public",
        "company_founding": "2015",
        "company_culture": "Sustainability-driven, hybrid work model.",
        "company_emp": "500",
        "req": "Looking for Solar Engineers",
        "email": "hello@greenfuture.com",
        "ph": "+91-9876543211"
    },
    {
        "name": "FinTechPro",
        "sector": "Financial Services",
        "intro": "AI-powered investment advisory platform.",
        "investors": "Y Combinator, Lightspeed Ventures",
        "financials_text": "High profitability with low churn rate.",
        "financials_num": "1,200 Cr",
        "fundamentals": "AI-driven wealth management.",
        "share_holding": "Private",
        "company_founding": "2020",
        "company_culture": "Fast-paced, data-driven decision-making.",
        "company_emp": "100",
        "req": "Hiring Data Scientists",
        "email": "team@fintechpro.com",
        "ph": "+91-9876543212"
    },
    {
        "name": "EduNext",
        "sector": "EdTech",
        "intro": "Next-gen e-learning platform for students.",
        "investors": "Byju’s, General Atlantic",
        "financials_text": "Increasing market penetration and revenue.",
        "financials_num": "600 Cr",
        "fundamentals": "Personalized learning using AI.",
        "share_holding": "Private",
        "company_founding": "2019",
        "company_culture": "EdTech-focused, fully remote.",
        "company_emp": "300",
        "req": "Hiring for Content Developers",
        "email": "support@edunext.com",
        "ph": "+91-9876543213"
    },
    {
        "name": "MediCore",
        "sector": "Healthcare Tech",
        "intro": "AI-driven diagnostic solutions.",
        "investors": "GV (Google Ventures), Khosla Ventures",
        "financials_text": "Strong R&D investments, awaiting FDA approvals.",
        "financials_num": "850 Cr",
        "fundamentals": "Automated health diagnostics.",
        "share_holding": "Public",
        "company_founding": "2017",
        "company_culture": "Research-driven, patient-centric.",
        "company_emp": "450",
        "req": "Looking for Medical Data Analysts",
        "email": "info@medicore.com",
        "ph": "+91-9876543214"
    },
]

def insert_sample_companies():
    """
    Inserts a predefined list of sample companies into the database if the table is empty.
    """
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    c.execute("SELECT COUNT(*) FROM companies")
    count = c.fetchone()[0]
    conn.close()

    if count == 0:
        for company in sample_companies:
            add_company(
                company["name"], company["sector"], company["intro"], company["investors"],
                company["financials_text"], company["financials_num"], company["fundamentals"],
                company["share_holding"], company["company_founding"], company["company_culture"],
                company["company_emp"], company["req"], company["email"], company["ph"]
            )
        print("Sample companies inserted successfully!")
