const express = require('express');
const cors = require('cors');
const businessRoutes = require('./routes/business');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/', businessRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
