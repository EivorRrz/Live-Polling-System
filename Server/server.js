// Imports
import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";
import setupSocket from "./socket/index.js";

// Init
dotenv.config();

// Connect to database
connectDB()
    .then(() => {
        console.log("✅ Connected To Database Successfully!");
    })
    .catch((err) => {
        console.error("❌ DB Connection Error:", err);
        process.exit(1); // Safe to exit on render
    });

// App + Server
const app = express();
const server = http.createServer(app);
const io = setupSocket(server);

// CORS setup
app.use(cors({
    origin: ["https://frontend-2zru.onrender.com"],
    credentials: true
}));
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
    res.json({ 
        message: "Polling App Server is running!",
        status: "OK",
        timestamp: new Date().toISOString()
    });
});

// REST API route
app.get("/api/polls/history", async (req, res) => {
    try {
        const { getPollHistory } = await import("./controller/pollController.js");
        const history = await getPollHistory();
        res.json({ success: true, data: history });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Socket.IO is listening`);
});
