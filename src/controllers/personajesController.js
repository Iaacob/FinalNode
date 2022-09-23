import { Router } from "express";
import PersonajesServices from "../services/personajesServices.js";
import Personaje from "../models/personaje.js";

const router = Router()
const personajesServices = new PersonajesServices();
const personaje = new Personaje();

//llamado a la funcion de creacion de personaje:
router.post('', async (req,res) => {

    try{
        const personaje = req.body;
        const personajeInsert = personajesServices.insertPersonaje(personaje);
        return res.status(200).json(personajeInsert);  
    } catch (error) {
        res.status(500);
        res.send(error.msg("Error en el servidor"));  
    }
    
});

//eliminacion de personaje:
router.delete('/Personajes/:id', async(req,res) => {
    try{
        const personajeDelete = await personajesServices.deleteById(req.params['id']);
        return res.status(200).send('personaje borrado');
    }catch(error){
        return res.status(400).send('error en el server');
    }
    
})

//obtener todos los personajes:
router.get('/personajes', async (res) => {
    const personajes = await personajesServices.getAll();
    return res.status(200).json(personajes);
});


//llamado a la funcion de obtener personaje por nombre
router.get('/Personajes/:name', async (res) => {
    const personaje = await personajesServices.getPersonajeByName();
    return res.status(200).json(personaje);
});


//obtener personaje por nombre
export const getPersonajeByEdad = async (req, res) => { 
    const { edad } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("edad", sql.String, edad)
          .query('SELECT * FROM Personajes WHERE edad = @edad');
          res.json(result.rows).status(200);
        } catch (error) {
        res.status(500);
        console.log(error);
      }
};


export default router