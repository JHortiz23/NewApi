//IMPORTAR LA CONEXION A LA BASE DE DATOS
import { getConection, sql } from "../database/conection";

//CREAR TODOS LOS METODOS DE UN CRUD PARA EXPORTARLOS A LAS RUTAS

//GET DATA
export const GetGeneralData = async (req, res) => {
    try {
        const pool = await getConection();

        const result = await pool.request().query('select *from tb_React')

        console.log(result);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//SEND DATA 
export const SendData = async (req, res) => {
    //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
    const { names, country, type } = req.body
    //validar
    if (names == "" || country == "" || type == "") {

        return res.status(400).json({ msg: 'You have to fill all fileds' })
    } else {
        try {

            //trer el pull
            const pool = await getConection();
            //insertar datos atraves del pool
            await pool.request()
                .input("name", sql.VarChar, names)
                .input("country", sql.VarChar, country)
                .input("type", sql.VarChar, type)
                .query("Insert into tb_React values (@name,@country,@type)");

            console.log(names, country, type);
            res.json('good')

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

};

//DELETE DATA
//SEND DATA 
export const DeleteData = async (req, res) => {
    try {

        //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
        const { Id } = req.params;

        const pool = await getConection();
        const result = await pool.request()
            .input("Id", Id)
            .query('Delete from tb_React where ID_Product = @Id')
        res.send("Eliminado correctamente: "+result);

    } catch (error) {
        res.send(error.message);
    }
};

//UPDATE DATA
//SEND DATA 
export const UpdateData = async (req, res) => {
    //AGRGEAR UN CLIENTE REST PARA HACER PRUEBAS CON POST O PUT
    const { names, country, type } = req.body

    const {Id} = req.params;
    //validar
    if (Id == "" ||names == "" || country == "" || type == "") {

        return res.status(400).json({ msg: 'You have to fill all fileds' })
    } else {
        try {

            //trer el pull
            const pool = await getConection();
            //insertar datos atraves del pool
            await pool.request()
                .input("name", sql.VarChar, names)
                .input("country", sql.VarChar, country)
                .input("type", sql.VarChar, type)
                .input("Id",sql.Int, Id)
                .query("UPDATE tb_React SET Product_Name = @name, Product_Country = @country, Product_Type = @type WHERE ID_Product = @Id");

            console.log(names, country, type,Id);
            res.send("Actualizado correctamente")

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

};
