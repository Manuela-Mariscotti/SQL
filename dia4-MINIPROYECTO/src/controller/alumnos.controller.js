const connection = require("../database")

function getAlumnos(request,response){
    console.log("Lanzada getAlumnos");
    let sql;
    //if (request.query.id == null){
        sql = "SELECT * FROM students"
    //}else{
        //sql = "SELECT * FROM students WHERE student_id="+request.query.id;
    //}
    let respuesta;
    connection.query(sql,function(err,result){
        if(err){
            console.log(err);
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "No se encontraron datos.",
                resultado: err
            }
        }else{
            // console.log(result);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Datos encontrados.",
                resultado: result
            }
        }
        response.send(respuesta)
    })
}

function postAlumnos(request,response){
    console.log("Lanzada postAlumnos");
    console.log("Request.body es : "+request.body);
    let sql = "INSERT INTO students (first_name,last_name,group_id,ingreso) "+
    "VALUES ('"+request.body.first_name +"','"+
                request.body.last_name +"','"+
                request.body.group_id +"','"+
                request.body.ingreso +"')";
    console.log("LA QUERY FUE: "+sql);
    let respuesta;
    connection.query(sql,function(err,result){
        if(err){
            console.log("Err es : "+err);
            respuesta = {
                error: true,
                codigo: 200,
                mensaje : "No se pudo crear nuevo registro.",
                resultado : err
            }
        }else{
            console.log("Result es: "+result);
            if(result.insertId){
                response.send(String(result.insertId));
                respuesta = {
                    error: false,
                    codigo: 200,
                    mensaje: "Registro creado con éxito.",
                    resultado: result
                }
            }else{
                response.send("-1");
            }
        }
    })
}

function putAlumnos(request,response){
    let sql1;
    let tablaStudent;
    let id=request.body.student_id;
    if (id){
        sql1 = "SELECT * FROM students"
    }else{
        console.log("no hay id ingresado");
    }
    connection.query(sql1,function(err,result){
        if (err){
            console.log(err)
        }else{

            tablaStudent = result

            for (let i = 0; i < tablaStudent.length; i++){

                if (id == tablaStudent[i].student_id){

                    let sql2 = "UPDATE students SET first_name='"+request.body.first_name+"',last_name='"+request.body.last_name+"',group_id="+request.body.group_id+",ingreso='"+request.body.ingreso+"' WHERE student_id="+id+";";
                    
                    connection.query(sql2,function(err,result){
                        if (err)
                            console.log(err);
                        else{
                            console.log(result);

                            if (result.insertId)
                                response.send(String(result.insertId));
                            else
                                response.send("-1");
                        }
                    })            
                }
            }
        }
    })
}


function deleteAlumnos(request,response){
    console.log("Lanzada deleteAlumnos");
        let sql1;
    let tablaStudent;
    let id=request.body.student_id;
    if (id){
        sql1 = "SELECT * FROM students"
    }else{
        console.log("no hay id ingresado");
    }
    connection.query(sql1,function(err,result){
        if (err){
            console.log(err)
        }else{

            tablaStudent = result

            for (let i = 0; i < tablaStudent.length; i++){

                if (id == tablaStudent[i].student_id){

                    let sql2 = "DELETE FROM students WHERE student_id="+id+";";
                    
                    connection.query(sql2,function(err,result){
                        if (err)
                            console.log(err);
                        else{
                            console.log(result);

                            if (result.insertId)
                                response.send(String(result.insertId));
                            else
                                response.send("-1");
                        }
                    })            
                }
            }
        }

    })
}

module.exports = {getAlumnos,postAlumnos,putAlumnos,deleteAlumnos}