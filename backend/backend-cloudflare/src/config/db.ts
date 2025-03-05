import { MongoClient } from 'mongodb';

// const connectDB = async () => {
//   try {
//     const conn = await mongo.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;


export default {
  async fetch(request, env, ctx): Promise<Response> {

    // connect to atlas mongodb
    const tlsClient = new MongoClient(process.env.);
    await tlsClient.connect();

    // connect to mongo running locally
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();

    const db = tlsClient.db('test');
    const users = await db.collection('users').find({}).toArray().limit(10);

    return Response.json({
      users
    })
  },
} satisfies ExportedHandler<Env>;