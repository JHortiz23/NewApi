//LAS RUTAS DE TODAS LAS PETICIONES QUE SE HACEN EN controllers
//importar router de express para crear URLS
import {Router} from "express";
//IMPORTA CADA UNO DE LOS METODOS CRUD
import { DeleteData, GetGeneralData, SendData, UpdateData } from "../controllers/CrudData";
//instanciar la importacion
const router = Router()
//CONSTRUIR CADA UNA DE LAS RUTAS
router.get('/GetGeneralData', GetGeneralData)

router.delete('/DeleteData/:Id', DeleteData)

router.post('/SendData', SendData)

router.put('/UpdateData/:Id', UpdateData)
//EXPORTAR
export default router