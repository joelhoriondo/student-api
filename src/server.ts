import 'dotenv/config';
import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Student API running at http://localhost:${PORT}`);
});