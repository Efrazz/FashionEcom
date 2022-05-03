/** @format */

import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import {
    authRoutes,
    cartRoutes,
    productRoutes,
    orderRoutes,
    userRoutes,
} from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const mongoURL = process.env.MONGO_URL;

//step2
const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGODB_URI || mongoURL
        );
        console.log('Mongo db connected');
        mongoose.connection.on('connected', () => {
            console.log('mongoose connected');
        });
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};
connectDatabase();

app.use('/users', authRoutes);
app.use('/users', userRoutes);
app.use('/carts', cartRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//step 3

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is up and running`));
