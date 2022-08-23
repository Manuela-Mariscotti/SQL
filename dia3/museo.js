let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Marisella67$",
        database: "museo"
    }
)
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexion correcta.");
    }
});

sql1= "SELECT duenio.nombre AS nombre_duenio,duenio.apellido AS apellido_duenio,duenio.email,piezas.nombre AS titulo,piezas.localización,situacion.situacion,situacion.f_expiracion FROM museo.duenio JOIN museo.piezas ON (duenio.duenio_id = piezas.duenio_id) JOIN museo.situacion ON (piezas.situacion_id = situacion.situacion_id) WHERE situacion.situacion='prestado por'"

// connection.query(sql1,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Piezas prestadas");
//         console.log(result);
//     }
// })

sql2 = "SELECT COUNT(*) AS cantidad_piezas,colección FROM museo.piezas GROUP BY colección ORDER BY cantidad_piezas DESC "

// connection.query(sql2,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Piezas prestadas");
//         console.log(result);
//     }
// })