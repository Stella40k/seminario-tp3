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

