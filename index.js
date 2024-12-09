import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import path from 'path'

//usar puerto

const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

//middelwares: funciones que se ejecutan antes que las rutas
app.use(cors()); //permitir conexiones remotas 
app.use(express.json());//Permite a mi aplicacion recibir objetos de tipo json en las request
app.use(morgan('dev'));//Muestra en consola informacion extra de las solicitudes get, post, push.
console.log(path.join(__dirname, '/public'));// la variable __dirname siempre devuelve la ruta absoluta donde se aloja el proyecto
app.use(express.static(path.join(__dirname, '/public')));// Esto nos permite poder ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend Ej: http://localhost:4000
//rutas