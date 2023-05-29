//primero traer el modulo de coneccion de sql
import sql from "mssql";
import config from "../config";

//hacer una coneccion simple
//dentro de ella colocamos todos los datos de donde se encuentra la base de datos y accceso
const databaseSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}
//crear una funcion de conexion
export async function getConection() {
    try {
        const pool = await sql.connect(databaseSettings);
        return pool;

    } catch (error) {

        console.log(error)

    }
}

//ir a Index.js y importar la cenexion que se encuentra en la carperta de database
export {sql}