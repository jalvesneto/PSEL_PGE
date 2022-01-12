const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "db"
});

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    const name = req.body.name;
    const level = req.body.level;

    db.query("SELECT * FROM users WHERE user=?", [user], (err,result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0){
            db.query("INSERT INTO users (user, password, name, level) VALUES (?, ?, ?, ?)", [user, password, name, level], (err, result) => {
                if (err) {
                    res.send(err)
                };
                res.send({msg: "Usuario Cadastrado!"})
            })
        }else{
            res.send({msg: "Usuário ja cadastrado!"})
        }
    });
})

app.post("/login", (req,res) =>{
    const user = req.body.user;
    const password = req.body.password;

    db.query("SELECT name, level FROM users WHERE user=? AND password=?", [user, password], (err, result)=>{
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            res.send({msg: "Usuario Logado! Nome: "+result[0].name+" Nivel: "+result[0].level});
        }else{
            res.send({msg: "Usuario ou senha incorretos!"});
        }
    })
})

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});

