import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import formRoutes from './routes/formRoutes.js';
import connectDB from './config/db.js';
connectDB();
const app = express();
// middlerwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/form/', formRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on port ${process.env.PORT || 5000}`);
});
