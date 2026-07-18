const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});