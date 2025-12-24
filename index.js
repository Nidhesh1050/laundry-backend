import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import connectDB from './config/connectDB.js';
import authRoute from './route/user.route.js';

const app = express();



app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', authRoute);

const PORT = process.env.PORT || 8081;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Failed to connect to MySQL:', err.message);
});
