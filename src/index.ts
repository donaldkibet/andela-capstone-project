import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => res.send("Andela Capstone Project!"));

app.listen(port, () => console.log(`Andela Capstone Project on port ${port}`));