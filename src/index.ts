import * as express from "express"
import { AppDataSource } from "./data-source"
import cors = require("cors");
import helmet from "helmet";
import { cliente } from "./entity/Cliente";
import routes from "./routes";


const PORT=process.env.port || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    
    //rutas
    app.use('/', routes);

const Cliente1 = new cliente()
Cliente1.cedula = 603470868;
Cliente1.nombre = "Ricardo";
Cliente1.apellido1 = "Contreras";
Cliente1.apellido2 = "Ocampo";
Cliente1.fechaNacimiento = "25-02-1990";
Cliente1.genero = "M";
Cliente1.estado = true;

const Cliente2 = new cliente()
Cliente2.cedula = 604920979;
Cliente2.nombre = "Melanie";
Cliente2.apellido1 = "Rodriguez";
Cliente2.apellido2 = "Jimenez";
Cliente2.fechaNacimiento = "16-07-1985";
Cliente2.genero = "F";
Cliente2.estado = true;

const Cliente3 = new cliente()
Cliente3.cedula = 604330788;
Cliente3.nombre = "Jose";
Cliente3.apellido1 = "Rodríguez";
Cliente3.apellido2 = "Jimenez";
Cliente3.fechaNacimiento = "06-05-2001";
Cliente3.genero = "M";
Cliente3.estado = false;

const Cliente4 = new cliente()
Cliente4.cedula = 606840843;
Cliente4.nombre = "Maria";
Cliente4.apellido1 = "Esquivel";
Cliente4.apellido2 = "Gonzales";
Cliente4.fechaNacimiento = "11-11-2002";
Cliente4.genero = "F";
Cliente4.estado = true;


await AppDataSource.manager.save(Cliente1)
await AppDataSource.manager.save(Cliente2)
await AppDataSource.manager.save(Cliente3)
await AppDataSource.manager.save(Cliente4)

    // start express server
   app.listen(PORT, ()=>{console.log(`Corriendo en el puerto: ${PORT}`)});

   

}).catch(error => console.log(error))




