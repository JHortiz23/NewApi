import  express  from "express";
//import config para acceder a la variable del puerto
import  config  from "./config";
//importar las rutas
import CRUDroutes from "./routes/CRUD.routes"

const app = express()

//decirle que recibas json
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//configurar el puerto
app.set('port', config.port)

//le indicamos a la aplicacion que utilize las rutas 
app.use(CRUDroutes)
//si existe por que utilize el puerto de la variable sino que utilize el puerto 3000
export default app
