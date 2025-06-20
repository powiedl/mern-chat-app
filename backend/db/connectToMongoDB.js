import mongoose, { mongo } from 'mongoose';

const connectToMongoDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log('Missing MONGO_URI!');
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};

export default connectToMongoDB;
