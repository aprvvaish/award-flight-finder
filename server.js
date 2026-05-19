const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend (optional later)
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.send('Award Flight Finder Backend is running 🚀');
});

// Search endpoint
app.post('/api/search', (req, res) => {
  const { from, to, date, cabin = 'business' } = req.body;
  
  // Mock data for now (we'll replace with real scraping later)
  const mockResults = [
    {
      id: 1,
      airline: "Air India",
      flight: "AI 123",
      departure: "02:30",
      arrival: "08:45",
      duration: "14h 15m",
      stops: 0,
      points: 75000,
      cash: 1240,
      program: "Air India",
      availability: "High"
    },
    {
      id: 2,
      airline: "United",
      flight: "UA 84",
      departure: "03:10",
      arrival: "09:55",
      duration: "14h 45m",
      stops: 1,
      points: 65000,
      cash: 1380,
      program: "United",
      availability: "Limited"
    }
  ];

  res.json({
    success: true,
    from,
    to,
    date,
    cabin,
    results: mockResults,
    total: mockResults.length
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
