import config from "../../dbConfig.js";
import sql from 'mssql'

class PersonajesServices {

    //obtener todos los personajes
    getAll = async () => {
        //llamar base de datos
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                //aplicar un query 
                .query('SELECT * FROM Personajes')
            //mostrarlo
            return result.recordset
        } catch (error) {
            res.status(500);
            res.send(error.msg("Error en el servidor"));
        }
    }

    //obtener personaje por nombre
    getPersonajeByName = async (req, res) => {
        const { name } = req.params;
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input("name", sql.String, name)
                .query('SELECT * FROM Personajes WHERE name = @name');
            res.json(result.rows).status(200);
        }
        catch (error) {
            res.status(500);
            res.send(error.msg("Error en el servidor"));
        }
    };

    //borrar personaje por id
    deleteById = async (Id) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, Id)
                .query("DELETE FROM Personajes WHERE Id = @pId");
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    //borrar todos los personajes
    deleteAll = async () => {
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .query('DELETE * FROM Personajes')
            return result.recordset
        } catch (error) {
            res.status(500);
            res.send(error.msg("Error en el servidor"));
        }
    }

    //crear personaje
    insertPersonaje = async (req, res) => {
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

}

export default PersonajesServices;