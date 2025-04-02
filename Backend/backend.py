import sqlite3
import hashlib

# Hash password function for security
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Insert a new user into the database
def insert_user(username, password, full_name):
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

# Verify if the password matches the stored hash
def verify_password(username, password):
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

# Add a new company to the database
def add_company(name, sector, intro, investors, financials_text, financials_num, fundamentals, 
                share_holding, company_founding, company_culture, company_emp, req, email, ph):
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

# Read all companies from the database
def read_companies():
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

# Read all users from the database (do not return password hash)
def read_users():
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

# Fetch user details from the database using the user_id (username in this case)
def get_user_from_db(user_id):
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

# Initialize the database with required tables
def initialize_database():
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

#initialize_database()

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
    for company in sample_companies:
        add_company(
            company["name"], company["sector"], company["intro"], company["investors"],
            company["financials_text"], company["financials_num"], company["fundamentals"],
            company["share_holding"], company["company_founding"], company["company_culture"],
            company["company_emp"], company["req"], company["email"], company["ph"]
        )
    print("Sample companies inserted successfully!")

#print(read_companies())
#insert_sample_companies()