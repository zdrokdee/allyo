// backend/index.ts
import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";
import { profileHandler } from "./routes/profile";
// Load environment variables from the .env file
dotenv.config();

// Create an instance of Express
const app = express();
app.use(express.json());

// PostgreSQL client setup
const dbClient = new Client({
    connectionString: process.env.DATABASE_URL,
});

dbClient.connect();

// Test route for checking connection
app.get("/", async (req, res) => {
    try {
        const result = await dbClient.query("SELECT NOW()");
        res.send(`PostgreSQL connected successfully: ${result.rows[0].now}`);
    } catch (err) {
        console.error("Error connecting to PostgreSQL", err);
        res.status(500).send("Error connecting to PostgreSQL");
    }
});

app.post("/api/profile", profileHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
