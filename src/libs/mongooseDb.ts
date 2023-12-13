import mongoose, {ConnectOptions} from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return
  try {
    
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    } as ConnectOptions);

    // Проверка соединения
    const db = mongoose.connection;
    db.once("error", console.error.bind(console, "MongoDB connection error:"));
    db.on("open", function () {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log(error);
  }
};
