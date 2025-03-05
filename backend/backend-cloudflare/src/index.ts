import { fromHono } from "chanfana";
import { Env, Hono } from "hono";
// import { TaskCreate } from "./endpoints/taskCreate";
// import { TaskDelete } from "./endpoints/taskDelete";
// import { TaskFetch } from "./endpoints/taskFetch";
// import { TaskList } from "./endpoints/taskList";

import cors from 'cors';
import dotenv from 'dotenv';
// import connectDB from './config/db';
import { MongoClient } from "mongodb";

dotenv.config();

console.log(process.env.MONGO_URI);

// REQUEST
// REQUEST (MIDDLEWARE) -> HANDLER (DB)

export default {
	async fetch(request, env, ctx): Promise<Response> {

		// console.log(env);

		// // connect to atlas mongodb
		// const tlsClient = new MongoClient();
		// await tlsClient.connect();

		// // connect to mongo running locally
		// const client = new MongoClient('mongodb://localhost:27017');
		// await client.connect();

		// const db = tlsClient.db('test');
		// const users = await db.collection('users').find({}).toArray().limit(10);

		return Response.json(JSON.stringify(env))
	},
} satisfies ExportedHandler<Env>;

// // Connect to MongoDB
// // connectDB();

// // Start a Hono app
// const app = new Hono();

// // Setup OpenAPI registry
// const openapi = fromHono(app, {
// 	docs_url: "/",
// });

// // Register OpenAPI endpoints
// openapi.get("/api/tasks", TaskList);
// openapi.post("/api/tasks", TaskCreate);
// openapi.get("/api/tasks/:taskSlug", TaskFetch);
// openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// // Export the Hono app
// export default app;
