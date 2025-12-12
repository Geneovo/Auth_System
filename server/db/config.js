import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mernAuth`);
    console.log("Database connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

// const connectDb = async () => {
//     mongoose.connection.on('connected', () => {
//         console.log('Database connected...')
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/mernAuth`)
// }
