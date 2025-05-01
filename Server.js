import express from 'express';

const app = express();
app.listen(8080, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) =>{
    res.status(200).send("Trabalho cliente/servidor")
})