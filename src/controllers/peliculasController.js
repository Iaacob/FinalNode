import { Router } from "express";
import PeliculasServices from "../services/personajesServices.js";
import Pelicula from "../models/pelicula";

const router = Router()
const peliculasServices = new PeliculasServices();
const pelicula = new Pelicula();


