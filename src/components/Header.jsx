import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [userName, setUserName] = useState('');

  // Fetch user's full name from the backend
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        
        if (response.ok) {
          setUserName(data.name);
        } else {
          console.error('Error fetching user name');
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <div className="text-6xl font-bold text-white mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello,
        </motion.div>
      </div>
      <motion.div
        className="text-6xl font-bold text-purple-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {userName ? userName : 'Loading...'}
      </motion.div>
    </>
  );
}

export default Header;
