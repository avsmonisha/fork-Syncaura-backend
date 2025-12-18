import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = 'mongodb+srv://syncaura450_db_user:eCbV14eb54eQKWuO@cluster0.wdzczz0.mongodb.net/?appName=Cluster0';
  const url = 'mongodb+srv://anilanii:AnilAnii@1312@cluster0.llzjuvh.mongodb.net/';
  if (!uri) throw new Error('MONGO_URI not set');
  try {
    await mongoose.connect(uri, { autoIndex: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
