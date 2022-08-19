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

let sql1= "INSERT INTO school.teachers (first_name,last_name) VALUES (\"Samantha\",\"Colleman\"),(\"Maria\",\"Zampaino\"),(\"Jose\",\"Herrera\"),(\"Julia\",\"Mengolini\"),(\"Malena\",\"Pichot\"),(\"Vanesa\",\"Strauch\"),(\"Danila\",\"Saiegh\"),(\"Albus\",\"Dumbeldore\"),(\"Cristina\",\"Kirchner\"),(\"Axel\",\"Kiccilof\")";

// connection.query(sql1, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Datos cargados");
//         console.log(result);
//     }
// });

let sql2="INSERT INTO school.subjects (title) VALUES (\"Maquetación\"),(\"Fundamentos\"),(\"NodeJS\"),(\"SQL\"),(\"Angular\"),(\"React\"),(\"Ionic\"),(\"Git\"),(\"Llanto\"),(\"Educación física\")";

// connection.query(sql2, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Datos cargados");
//         console.log(result);
//     }
// });

let sql3 = "INSERT INTO school.groups (name) VALUES (\"full-time\"),(\"full-time-VERANO\"),(\"part-time\"),(\"part-time-VERANO\"),(\"pesencial\"),(\"remoto\"),(\"inicial\"),(\"intermedio\"),(\"avanzado\"),(\"postgrado\")";

// connection.query(sql3, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Grupos cargados");
//         console.log(result);
//     }
// });

let sql4 = "INSERT INTO school.students (first_name,last_name,group_id) VALUES (\"Britney\",\"Spears\",1),(\"Lady\",\"Gaga\",3),(\"Marcelo\",\"Tinelli\",5),(\"Joseph\",\"Stalin\",7),(\"Naty\",\"Peluso\",9),(\"Nancy\",\"Pelosi\",10),(\"Joe\",\"Biden\",2),(\"Darcy\",\"Perrotti\",4),(\"Eliana\",\"Tapia\",6),(\"Fran\",\"Landeira\",8)";

// connection.query(sql4, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Alumnos cargados");
//         console.log(result);
//     }
// });

let sql5="INSERT INTO school.subject_teacher (teacher_id,group_id) VALUES (7,5),(9,4),(11,6),(13,8),(15,1),(8,2),(10,7),(12,3),(14,5),(16,10)" 

// connection.query(sql5, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Asignatura-profesores cargados");
//         console.log(result);
//     }
// });

let sql6 = "INSERT INTO school.marks (student_id, subject_id, date, mark) VALUES (5,4,\"1999-3-17\",3),(10,1,\"2001-12-01\",5),(6,8,\"2010-01-15\",7),(6,2,\"2011-05-03\",8),(9,5,\"2012-10-10\",9),(7,2,\"2019-04-30\",10),(4,10,\"2018-02-13\",9),(8,3,\"2018-11-25\",7),(1,1,\"2020-12-25\",10),(2,2,\"2022-02-02\",2)"

// connection.query(sql6, function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Marks cargados");
//         console.log(result);
//     }
// });

let sql7="UPDATE marks SET mark=0";

// connection.query(sql7,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Notas actualizadas");
//         console.log(result);
//     }
// })

let sql8 = "SELECT first_name,last_name FROM students"

// connection.query(sql8,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Nombres encontrados");
//         console.log(result);
//     }
// })

let sql9 = "SELECT * FROM teachers"

// connection.query(sql9,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Datos de profesores");
//         console.log(result);
//     }
// })

let sql10 = "DELETE FROM marks WHERE date < \"2012-08-17\"";

// connection.query(sql10,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Notas borradas");
//         console.log(result);
//     }
// })

let sql11 = "UPDATE marks SET mark=5 WHERE mark<5"

// connection.query(sql11,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Notas actualizadas");
//         console.log(result);
//     }
// })