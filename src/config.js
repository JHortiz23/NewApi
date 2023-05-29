import { config } from "dotenv"
//ejecutar
config();

export default{
    // validar la variable de entorno para eso se importa dotenv
    //crear una variable para almacenar el puerto
    port: process.env.PORT || 5000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDataBase: process.env.DB_DATABASE || '',

}