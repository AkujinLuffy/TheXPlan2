import { fromHono } from "chanfana";
import { Env, Hono } from "hono";

import cors from 'cors';
import dotenv from 'dotenv';


import { MongoClient } from "mongodb";

dotenv.config();

// import { TaskCreate } from "./endpoints/taskCreate";
// import { TaskDelete } from "./endpoints/taskDelete";
// import { TaskFetch } from "./endpoints/taskFetch";
// import { TaskList } from "./endpoints/taskList";

// TODO: CONVERT THIS TO MIDDLEWARE ⬇️
export default {
	async fetch(request, env, ctx): Promise<Response> {
		// @ts-expect-error
		const tlsClient = new MongoClient(env.MONGO_URI);
		await tlsClient.connect();

		const db = tlsClient.db('test');

		const progress = (await db.collection('progress').find({}).toArray());

		console.log(progress);

		
		// import connectDB from './config/db';
		// TODO: ⬆️ middleware

		return Response.json({});
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
