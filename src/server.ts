import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import config from "./config"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send({ success: true, message: "Server is running" })
})

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
});

async function server() {
    try {
        await mongoose.connect(config.mongoUri)
        console.log(`MongoDB connected: ${mongoose.connection.host}`)
    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit(1)
    }
}

server();