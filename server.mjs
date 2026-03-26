//dependencias para desarrollo
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

//middleware, ayuda a entender los datos qu llegan en formato json
app.use(express.json());
//no hice modularizacion correcta, el "." refiere a la carpeta raiz del proyecto,
//cuando busque un archivo lo hara en la carpeta raiz (index.html)
app.use(express.static("."));

const memoria = {} //objeto vacio, se guardaran los datos de los arrays. Base de datos temporal en la RAM

//ruta GET: es la ruta que llama el front para tener los datos de alumnos
//en esta ruta se recuperan los datos de los alumnos, se accede a la memoria y se devuelve el valor asociado a la clave "alumnos"
app.get("api/alumnos"), (req, res)=>{
    //uso headers para enviar id unico desde la compu pq no tengo login, para identificar users
    const usuario = req.headers["sesepomelo"]; 

    //si el usuario no existe en memoria se crea un nuevo array vacio para ese user
    if(!memoria[usuario]){
        memoria[usuario] = [];
    }

    res.json(memoria[usuario]); //se manda la lista al front
};

//ruta post: el front envia un alumno nuevo para guardar
app.post("/api/alumnos", (req, res)=>{
    const usuario = req.headers["sesepomelo"];
    const nuevoAlumno = req.body; //llega los datos que el user escribio rn rl formulario

    if(!memoria[usuario]){
        memoria[usuario] = [];
    }

    memoria[usuario].push(nuevoAlumno); //se guarda el objeto alumno en el array deñ usuario
    res.json({message: "Alumno agregado"}) 
})

app.listen(3000, ()=>{
    console.log("corriendo en el puerto 3000");
});