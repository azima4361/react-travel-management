const express = require('express');
const router = express.Router();
const { User } = require('./../../models'); // Adjust the path as necessary

// POST /api/register
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Create a new user
    const newUser = await User.create({ username: userName, email, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});



// POST /api/login
router.post('/login', async (req, res) => {
    const { userName,email, password } = req.body;
    
  
    try {
      // Find the user by email
    
      const user = await User.findOne({ where: { email } });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // If passwords match, login is successful
      res.status(200).json({ message: 'Login successful', token: 'your_generated_token',
        user: { id: user.id, username: user.username, email: user.email }, });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Login failed', error });
    }
  });
  
module.exports = router;



