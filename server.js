
const express = require('express');
const app = express();

// Simulated data (Replace this with actual database operations)
const userProfile = {
  name: 'John Doe',
  email: 'john@example.com'
};

const preferredTenders = [
  { name: 'Tender 1', type: 'Type A' },
  { name: 'Tender 2', type: 'Type B' }
];

const appliedTenders = [
  { name: 'Tender 3', type: 'Type C' },
  { name: 'Tender 4', type: 'Type D' }
];

// Serve the HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>User Profile</title>
    </head>
    <body>
      <header>
        <h1>User Profile</h1>
        <h2>Welcome, ${userProfile.name}!</h2>
      </header>
      
      <main>
        <section>
          <h2>User Profile Information</h2>
          <div id="profileInfo">
            <p>User Name: ${userProfile.name}</p>
            <p>Email: ${userProfile.email}</p>
            <!-- Add more profile information fields -->
          </div>
        </section>
        
        <section>
          <h2>Preferred Tenders</h2>
          <ul id="preferredTenders">
            ${preferredTenders.map(tender => `<li>Tender: ${tender.name}, Type: ${tender.type}</li>`).join('')}
          </ul>
        </section>
        
        <section>
          <h2>Applied Tenders</h2>
          <ul id="appliedTenders">
            ${appliedTenders.map(tender => `<li>Tender: ${tender.name}, Type: ${tender.type}</li>`).join('')}
          </ul>
        </section>
      </main>
    </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
