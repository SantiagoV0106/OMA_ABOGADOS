import mongoose from 'mongoose'

export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost/omadb')
        console.log('db is connected');
        
    } catch (error) {
        console.error(error);
    }
}