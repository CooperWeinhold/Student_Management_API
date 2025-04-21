import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig.js';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/students', studentRoutes);

// root check
app.get('/', (req, res) => res.send('Student API is running'));

// start only after DB connects
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
  );
});
