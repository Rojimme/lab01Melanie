import { Router } from "express";
import ClientesController from "../controller/ClientesController";


const routes = Router();

routes.get('', ClientesController.ObtenerTodos)
routes.get('/:cedula', ClientesController.ObtenerById)

export default routes;