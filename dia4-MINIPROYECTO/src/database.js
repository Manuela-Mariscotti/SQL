let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Marisella67$",
        database: "school"
    }
)
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta.");
    }
});

module.exports = connection;