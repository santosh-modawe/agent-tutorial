import express from "express";

const app = express();

app.use(express.json());
app.use("/chat", require("./routes/chat").default);

app.listen(3000, () => {
    console.log("Server started");
});