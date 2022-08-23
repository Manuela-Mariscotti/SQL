const express = require ("express");
const cors = require ('cors');
const alumnosRouters = require("./routes/alumnos.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(alumnosRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({error:true, codigo: 404,message: "Endpoint not found"})
    })

app.use(errorHandling);

module.exports = app;
