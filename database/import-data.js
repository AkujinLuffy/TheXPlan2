const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

// Load environment variables
require('dotenv').config();

// Debug: Check if MONGO_URI is loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in the .env file.');
  process.exit(1);
}

// MongoDB connection URI
const uri = process.env.MONGO_URI;

// Read JSON files
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
const workouts = JSON.parse(fs.readFileSync('./data/workouts.json', 'utf-8'));
const progress = JSON.parse(fs.readFileSync('./data/progress.json', 'utf-8'));

// Convert string IDs to ObjectId
function convertIds(data) {
  return data.map((item) => {
    if (item._id) item._id = new ObjectId(item._id); // Use 'new' keyword
    if (item.userId) item.userId = new ObjectId(item.userId); // Use 'new' keyword
    return item;
  });
}

// Import data
async function importData() {
  const client = new MongoClient(uri); // Remove deprecated options

  try {
    await client.connect();
    const db = client.db();

    // Insert users
    const convertedUsers = convertIds(users);
    await db.collection('users').insertMany(convertedUsers);
    console.log('Users imported successfully!');

    // Insert workouts
    const convertedWorkouts = convertIds(workouts);
    await db.collection('workouts').insertMany(convertedWorkouts);
    console.log('Workouts imported successfully!');

    // Insert progress
    const convertedProgress = convertIds(progress);
    await db.collection('progress').insertMany(convertedProgress);
    console.log('Progress imported successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await client.close();
  }
}

importData();