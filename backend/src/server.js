// Backend Server - AIJobMatcher
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aijobmatcher')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Resume Routes
app.post('/api/resumes/upload', (req, res) => {
  res.json({ message: 'Resume uploaded successfully' });
});

app.get('/api/resumes/:id', (req, res) => {
  res.json({ message: 'Resume retrieved', id: req.params.id });
});

// Job Matching Routes
app.post('/api/jobs/match', (req, res) => {
  res.json({ message: 'Job matching results', matches: [] });
});

// Analysis Routes
app.post('/api/analysis/skills', (req, res) => {
  res.json({ skills: [], confidence: 0.95 });
});

app.post('/api/analysis/interview-prep', (req, res) => {
  res.json({ questions: [] });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
