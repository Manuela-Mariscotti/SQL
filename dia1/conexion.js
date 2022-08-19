let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Marisella67$",
        database: "codenotch"
    }
)

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta.");
    }
});


////////////////CREAR TABLA

// let sql = "CREATE TABLE profesores (id_pro INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(45) NOT NULL, apellido VARCHAR(45) NOT NULL,asignaturas VARCHAR(100) NOT NULL)"

// connection.query(sql, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Tabla creada");
//         console.log(result);
//     }
// });


////////////////CREAR COLUMNA

// let sql = "ALTER TABLE alumnos ADD COLUMN signoZodiacal VARCHAR(45) NOT NULL AFTER nacionalidad"
// connection.query(sql, function(err, result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Tabla modificada");
//         console.log(result);
//     }
// });


////////////////ELIMINAR TABLA

// let sql = "DROP TABLE profesores"
// connection.query(sql,function(err,result){
//     if (err) throw err;
//     console.log("Tabla eliminada");
// });

