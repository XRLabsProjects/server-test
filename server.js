import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.DB_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
    console.log("Server received call to path /api/");
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});