import mongoose from "mongoose";
export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://bharatDB:Bharat12345@cluster0.8ispuc7.mongodb.net/",
      {
        dbName: "Ecommerce24",
      }
    )
    .then((c) => console.log(`DB connected to ${c.connection.name}`))
    .catch((error) => console.log(error));
};
