import { Router } from "express";
import PersonajesServices from "../services/personajesServices.js";
import Personaje from "../models/personaje.js";

const router = Router()
const personajesServices = new PersonajesServices();
const personaje = new Personaje();

router.post('', async (req, res) => {
    try {
        console.log('req: ',  req.body);
        
        const personaje = req.body;
        const personajeInsert = await personajesServices.insertPersonaje(personaje);
        return res.status(200).json(personajeInsert);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});




router.get('', async (req, res) => {
    try {
        const personajes = await personajesServices.getAll();
        return res.status(200).json(personajes);

    } catch (error) {
        res.status(500);
        res.send(error);
    }
});


//llamado a la funcion de obtener personaje por nombre
router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const personaje = await personajesServices.getPersonajeByName(name, res);
        console.log(personaje)
        return res.status(200).json(personaje);

    } catch (error) {
        res.send(error);
    }
});

//eliminacion de personaje por id:
router.delete('/:id', async(req,res) => {
    try{
        await personajesServices.deleteById(req.params['id']);
        return res.status(200).send('personaje borrado');
    }catch(error){
        return res.status(500).send('error en el server');
    }
});


export default router