const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
require('dotenv').config(); 
const mysql = require('mysql2');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Registration App');
});

// Create a new registration
app.post('/register', (req, res) => {
    const { Name, Email, DateOfBirth, Password } = req.body;
    
    // Insert the data into the table
    const query = 'INSERT INTO Registration (Name, Email, DateOfBirth, Password) VALUES (?, ?, ?, ?)';
    
    db.query(query, [Name, Email, DateOfBirth, Password], (err, result) => {
        if (err) {
            console.error('Error creating registration:', err);
            res.status(500).json({ message: 'Database error' });
            return;
        }
        res.status(201).json({ message: 'User registered successfully', id: result.insertId });
    });
});

// Get all registrations
app.get('/registrations', (req, res) => {
    const query = 'SELECT * FROM Registration';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching registrations:', err);
            res.status(500).json({ message: 'Database error' });
            return;
        }
        res.json(results);
    });
});

// Update a registration by ID
app.put('/register/:id', (req, res) => {
    const { Name, Email, DateOfBirth, Password } = req.body;
    const { id } = req.params;

    const query = 'UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ?, Password = ? WHERE ID = ?';
    
    db.query(query, [Name, Email, DateOfBirth, Password, id], (err, result) => {
        if (err) {
            console.error('Error updating registration:', err);
            res.status(500).json({ message: 'Database error' });
            return;
        }
        res.json({ message: 'User updated successfully' });
    });
});

// Delete a registration by ID
app.delete('/register/:id', (req, res) => {
    const { id } = req.params;
    
    const query = 'DELETE FROM Registration WHERE ID = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting registration:', err);
            res.status(500).json({ message: 'Database error' });
            return;
        }
        res.json({ message: 'User deleted successfully' });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
