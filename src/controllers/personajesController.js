import { Router } from "express";
import PersonajesServices from "../services/personajesServices.js";

const router = Router()
const personajesServices = new PersonajesServices();

router.get('/personajes', async (req,res) =>{
    const personajes = await personajesServices.getAll();
    return res.status(200).json(personajes);
});

export default router