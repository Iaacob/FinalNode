import { Router } from "express";
import PersonajesServices from "../services/personajesServices.js";

const router = Router()
const personajesServices = new PersonajesServices();


//obtener todos los personajes
router.get('/personajes', async (req, res) => {
    const personajes = await personajesServices.getAll();
    return res.status(200).json(personajes);
});

//obtener personaje por nombre
export const getPersonajeByName = async (req, res) => { 
    const { name } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("name", sql.String, name)
          .query('SELECT * FROM Personajes WHERE name = @name');
          res.json({ name }).status(200);
        } catch (error) {
        res.status(500);
        console.log(error);
      }
};

//creacion de personaje
export const createPersonaje = async (req, res) => {
    const name = req.body;

    if (name == null) {
        return res.status(400).json({ msg: "faltan datos" });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar(50), name)
            .query('INSERT INTO Personajes (name) VALUES (@name)') 
        res.json({ name }).status(200);
    } catch (error) {
        res.status(500);
        res.send(error.msg("Error en el servidor"));
    }
};

//eliminacion de personaje


export default router