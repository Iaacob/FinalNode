import { Router } from "express";
import PeliculasServices from "../services/personajesServices.js";
import Pelicula from "../models/pelicula";

const router = Router()
const peliculasServices = new PeliculasServices();
const pelicula = new Pelicula();


//ACA FALTA
router.postrouter.get('/Peliculass/:titulo', async (res) => {
    const pelicula = await peliculasServices.getPeliculasByTitulo();
    return res.status(200).json(personaje);
});
