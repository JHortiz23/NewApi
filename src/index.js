//llamar app de app.js
import app from "./app";
//importar la conexion de base de datos
import './database/conection'

//asignarle un puerto
app.listen(app.get('port'));

console.log("server on port",app.get('port'));
