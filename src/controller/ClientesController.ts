import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { cliente } from "../entity/Cliente";




class ClientesController{

    static ObtenerTodos = async (req:Request, resp:Response)=>{
        try {
            const clienteRepository = AppDataSource.getRepository(cliente);
            const clientes = await clienteRepository.find();
            resp.json(clientes);
          } catch (error) {
            resp.status(500).json({ message: 'Error al obtener todos los clientes' });
          }
        };

        static ObtenerById = async (req: Request, resp: Response) => {
            try {
                const { cedula } = req.params;
                const clienteRepository = AppDataSource.getRepository(cliente);
              const clientes = await clienteRepository.findOneByOrFail({cedula:parseInt(cedula)});
              if (clientes) {
                resp.json(clientes);
              } else {
                resp.status(404).json({ message: 'Cliente no encontrado' });
              }
            } catch (error) {
              resp.status(500).json({ message: 'Error al obtener el cliente por cédula' });
            }
          };
}
    

export default ClientesController;