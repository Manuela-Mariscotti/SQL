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

let sql1= "SELECT AVG(mark) FROM marks WHERE subject_id = 1"

// connection.query(sql1,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Porcentaje sacado");
//         console.log(result);
//     }
// })

let sql2 = "SELECT COUNT(*) FROM students"

// connection.query(sql2,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Alumnos contados");
//         console.log(result);
//     }
// })

let sql3 = "SELECT * FROM school.groups";

// connection.query(sql3,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Tabla groups listada");
//         console.log(result);
//     }
// })

let sql4 = "DELETE FROM school.marks WHERE mark > 5 AND date < \"2022-01-01\""

// connection.query(sql4,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Notas borradas");
//         console.log(result);
//     }
// })

let sql5 = "ALTER TABLE students ADD ingreso DATE"

// connection.query(sql5,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Columna agregada");
//         console.log(result);
//     }
// })

let sql6bis = "SELECT student_id FROM school.students WHERE ingreso >= \"2022-01-01\" ";
// let sql6bis = `SELECT student_id FROM school.students WHERE ingreso >= "2022-01-01" `;
// let sql6bis = ' SELECT student_id FROM school.students WHERE ingreso >= "2022-01-01" ' ;

// connection.query(sql6bis,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Alumnos de este año");
//         console.log(result);
//     }
// })

let sql7 = "SELECT teacher_id, COUNT(*) AS num_teachers FROM subject_teacher GROUP BY teacher_id"

// connection.query(sql7,function(err,result){
//     if (err)
//         console.log(err);
//     else{
//         console.log("Porfesores contados");
//         console.log(result);
//     }
// })

let sql8 = "SELECT student_id,mark FROM school.marks WHERE student_id > 1 AND student_id < 20  OR mark > 8 AND date < \"2021-12-31\" AND date > \"2021-01-01\""

// connection.query(sql8,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Notas seleccionadas");
//         console.log(result);
//     }
// })

let sql9 = "SELECT subject_id, AVG(mark)FROM marks WHERE date > \"2021-08-17\" AND date <\"2022-08-17\" GROUP BY subject_id"

// connection.query(sql9,function(err,result){
//     if (err)
//         console.log(err);
//     else{
//         console.log("Notas seleccionadas");
//         console.log(result);
//     }
// })

let sql10 = "SELECT student_id,AVG(mark) FROM school.marks WHERE date BETWEEN \"2021-08-17\" AND \"2022-08-17\" GROUP BY student_id"

// connection.query(sql10,function(err,result){
//     if (err)
//         console.log(err);
//     else{
//         console.log("Notas seleccionadas");
//         console.log(result);
//     }
// })