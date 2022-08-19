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

let sql1 = "SELECT first_name,last_name,title FROM school.students JOIN marks ON (students.student_id = marks.student_id)JOIN subjects ON (marks.subject_id = subjects.subject_id);"

// connection.query(sql1,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Alumnos y sus materias");
//         console.log(result);
//     }
// })

let sql2 = "SELECT first_name,last_name,title FROM school.teachers JOIN subject_teacher on (teachers.teacher_id = subject_teacher.teacher_id)JOIN subjects on (subject_teacher.subject_id = subjects.subject_id )"

// connection.query(sql2,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Profesores y sus materias");
//         console.log(result);
//     }
// })

let sql3 = "SELECT teachers.first_name AS nombre_profe, teachers.last_name AS apellido_profe , title,  COUNT(students.student_id) FROM teachers JOIN subject_teacher on (teachers.teacher_id = subject_teacher.teacher_id)JOIN subjects on (subject_teacher.subject_id = subjects.subject_id )JOIN marks on (subjects.subject_id = marks.subject_id)JOIN students on (marks.student_id = students.student_id) JOIN grupos on (students.group_id = grupos.group_id) GROUP BY subjects.title"

// connection.query(sql3,function(err,result){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Profesores y sus materias");
//         console.log(result);
//     }
// })