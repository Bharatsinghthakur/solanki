const { MongoClient } = require('mongodb');

// Connection URI. Replace '<username>', '<password>', and '<your-cluster-url>' with your credentials.
const uri = 'mongodb://localhost:27017/';

// Create a new MongoClient
export const connectDB = ()=>{
  const client:any = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect()
   .then(() => {
      console.log('Connected to MongoDB');
      // Perform operations here
   })
   .catch((err:any)=>console.error('Error connecting to MongoDB:', err))
   .finally(() => {
      // Optionally close the client when your application is done
      // client.close();
   });

}
