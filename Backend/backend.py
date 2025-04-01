import sqlite3
import hashlib

"""
conn = sqlite3.connect('user_credentials.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                full_name TEXT NOT NULL
            )''')
conn.commit()
conn.close()
"""

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def insert_user(username, password, full_name):
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    
    c.execute("SELECT * FROM users WHERE username=?", (username,))
    user = c.fetchone()
    
    if user:
        conn.close()
        return False
    
    hashed_password = hash_password(password)
    c.execute("INSERT INTO users (username, password, full_name) VALUES (?, ?, ?)", 
              (username, hashed_password, full_name))
    conn.commit()
    conn.close()
    return True

def verify_password(username, password):
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    
    c.execute("SELECT password FROM users WHERE username=?", (username,))
    user = c.fetchone()
    
    if user:
        stored_password = user[0]
        if stored_password == hash_password(password):
            conn.close()
            return True
        else:
            conn.close()
            return False
    else:
        conn.close()
        return False

def add_company(name, sector, intro, investors, financials_text, financials_num, fundamentals, 
                share_holding, company_founding, company_culture, company_emp, req, email, ph):
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
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

    c.execute('''INSERT INTO companies (name, sector, intro, investors, financials_text, financials_num, fundamentals, 
                                        share_holding, company_founding, company_culture, company_emp, req, email, ph) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', 
              (name, sector, intro, investors, financials_text, financials_num, fundamentals, 
               share_holding, company_founding, company_culture, company_emp, req, email, ph))
    
    conn.commit()
    conn.close()

def read_companies():
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    
    # Query to select all rows from the companies table
    c.execute("SELECT * FROM companies")
    companies = c.fetchall()  # Fetch all rows
    
    # If no data is found, return an empty list
    if not companies:
        conn.close()
        return []
    
    # Structure the data (optional, depending on how you want to format the result)
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

import sqlite3

def read_users():
    conn = sqlite3.connect('user_credentials.db')
    c = conn.cursor()
    
    c.execute("SELECT * FROM users")
    users = c.fetchall()  
    
    if not users:
        conn.close()
        return []
    
    user_list = []
    for user in users:
        user_info = {
            "id": user[0],
            "username": user[1],
            "password": user[2],  # Consider not returning plain password hashes for security reasons
            "full_name": user[3]
        }
        user_list.append(user_info)
    
    conn.close()
    return user_list

print(read_users())
"""
conn = sqlite3.connect('user_credentials.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                full_name TEXT NOT NULL
            )''')
conn.commit()
conn.close()
"""