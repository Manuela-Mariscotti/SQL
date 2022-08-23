class Student{
    constructor(first_name,last_name,group_id,ingreso){
        this.first_name = first_name;
        this.last_name = last_name;
        this.group_id = group_id;
        this.ingreso = ingreso;
    }
}


function getAlumnos(){
    const url = "http://localhost:3000/alumnos";

    let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    
    fetch(url,param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {
        let index = document.getElementById("student_id").value;

        let id = index-1;

        let tablaStudent = result.resultado;

        let lista = document.getElementById("alumnosLista");

        let cont_lista = document.querySelector(".contTabla2");

        if(!result.err)
        {
            if(cont_lista.classList.contains("contTabla1")){
                cont_lista.classList.remove("contTabla1")
            }

            if(!index=="" || !index=="null"){
                let ingreso = new Date(tablaStudent[id].ingreso).toLocaleDateString()
                lista.innerHTML = `<thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Grupo</th>
                                        <th scope="col">Ingreso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">${tablaStudent[id].student_id}</th>
                                        <td>${tablaStudent[id].first_name}</td>
                                        <td>${tablaStudent[id].last_name}</td>
                                        <td>${tablaStudent[id].group_id}</td>
                                        <td>${ingreso}</td>
                                    </tr>
                                 </tbody>`

            }if(index=="" || index=="null"){

                lista.innerHTML =`<thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Grupo</th>
                                        <th scope="col">Ingreso</th>
                                    </tr>
                                </thead>`

                for (let i = 0; i < tablaStudent.length; i++) {

                    let ingreso = new Date(tablaStudent[i].ingreso).toLocaleDateString()

                    lista.innerHTML += `<tbody>
                                            <tr>
                                                <th scope="row">${tablaStudent[i].student_id}</th>
                                                <td>${tablaStudent[i].first_name}</td>
                                                <td>${tablaStudent[i].last_name}</td>
                                                <td>${tablaStudent[i].group_id}</td>
                                                <td>${ingreso}</td>
                                            </tr>
                                        </tbody>`
                }
            }   
        }else{
            console.log(result.mensaje);
        }
    })
    .catch(function (error){
        console.log(error);
    })
}

function postAlumnos(){
let alumnoNuevo = new Student(
    document.getElementById("first_name").value,
    document.getElementById("last_name").value,
    document.getElementById("group_id").value,
    document.getElementById("ingreso").value
    )
    //console.log("Objeto alumnoNuevo es: "+alumnoNuevo);
    
    const url = "http://localhost:3000/alumnos";

    let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(alumnoNuevo),
        method: "POST"
    }
    fetch(url,param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result){
        if(result.error){
            console.log("ERROR "+result.mensaje);
        }else{
            console.log("Registro creado correctamente.");
        }
        //console.log("Result.resultado es: "+result.resultado);
    })
    .catch(function(error){
        console.log(error);
    })
}

function putAlumnos(){
    let alumnoNuevo = new Student(
        document.getElementById("first_name").value,
        document.getElementById("last_name").value,
        document.getElementById("group_id").value,
        document.getElementById("ingreso").value
        )
    console.log(alumnoNuevo);
   
    const url = "http://localhost:3000/alumnos";

    let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(alumnoNuevo),
        method: "POST"
    }

    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        if(result.error){
            console.log("ERROR "+result.mensaje);
        }else{
            console.log("Registro");
            //ME QUEDÉ AQUI -haciendo el put del fetch
        }
        
    })


}
function deleteAlumnos(){

}