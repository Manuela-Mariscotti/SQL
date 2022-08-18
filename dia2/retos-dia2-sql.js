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

//--------------ESTO SE PUEDE HACER ASI? esto lo hice en workbench
let sql6 = "UPDATE `school`.`students` SET `ingreso` = '1987-03-17' WHERE (`student_id` = '1'), UPDATE `school`.`students` SET `ingreso` = '2000-12-04' WHERE (`student_id` = '2'), UPDATE `school`.`students` SET `ingreso` = '2022-07-11' WHERE (`student_id` = '3'), UPDATE `school`.`students` SET `ingreso` = '2021-10-01' WHERE (`student_id` = '4'), UPDATE `school`.`students` SET `ingreso` = '2022-01-01' WHERE (`student_id` = '5'), UPDATE `school`.`students` SET `ingreso` = '2019-03-16' WHERE (`student_id` = '6'), UPDATE `school`.`students` SET `ingreso` = '2018-06-24' WHERE (`student_id` = '7'), UPDATE `school`.`students` SET `ingreso` = '1950-10-17' WHERE (`student_id` = '8'), UPDATE `school`.`students` SET `ingreso` = '2022-05-30' WHERE (`student_id` = '9'), UPDATE `school`.`students` SET `ingreso` = '1810-05-25' WHERE (`student_id` = '10')";


// connection.query(sql6,function(err,result){
//     if(err)
//         console.log(err);
//     else{
//         console.log("Ingresos agregados");
//         console.log(result);
//     }
// })

let sql6bis = "SELECT student_id FROM school.students WHERE ingreso >= \"2022-01-01\"";

connection.query(sql6bis,function(err,result){
    if(err)
        console.log(err);
    else{
        console.log("Alumnos de este año");
        console.log(result);
    }
})

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
