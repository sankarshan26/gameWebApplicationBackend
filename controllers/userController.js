const User = require('../models/User');
const bcrypt = require('bcrypt');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // const { username, password, mobile } = req.body;
    const username = 'Sankarshan Mishra';
    const password = 'password10';
    const mobile = '0987654321';

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new User({ 
      username, 
      password: hashedPassword, 
      mobile 
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Get all users (example)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user' });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { username, mobile } = req.body; 
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { 
      username, 
      mobile 
    }, { new: true }); // Return the updated document

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};