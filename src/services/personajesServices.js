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
    insertPersonaje = async (personaje) => {

        let returnEntity = null;
        // hacer que la fecha creacion se ponga sin el usuario
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen', sql.VarChar(150), personaje.Imagen)
                .input('pNombre', sql.VarChar(50), personaje.Nombre)
                .input('pEdad', sql.Int, personaje.Edad)
                .input('pPeso', sql.Float, personaje.Peso)
                .input('pHistoria', sql.VarChar(350), personaje.Historia)
                .query(`INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia)
                                            VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)`);
            returnEntity = result.recordsets;
        }
        catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

}

export default PersonajesServices;