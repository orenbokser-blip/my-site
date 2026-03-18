const express = require("express");
const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשה
app.use(express.json());

// מאפשר CORS כדי שה-FE יוכל לשלוח בקשות
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.post("/post", (req, res) => {
    console.log("POST request data:", req.body);
    res.send("POST request התקבל!");
});

// הפעלת השרת
app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});
