import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("<h1>creating a server</h1>")
})

app.listen(PORT, () =>{
    console.log(`server running on http://localhost:${PORT}`)
})