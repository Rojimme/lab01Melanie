import { Router } from "express";
import clientes from "./clientes";


const routes = Router();

routes.use('/Cliente', clientes);

export default routes;
