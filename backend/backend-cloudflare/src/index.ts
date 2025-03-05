import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";

//import from server js
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// Export the Hono app
export default app;
