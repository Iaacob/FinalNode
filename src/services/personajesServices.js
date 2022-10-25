import config from "../../dbConfig.js";
import sql from 'mssql'

class PersonajesServices {

    insertPersonaje = async (personaje, res) => {

        let returnEntity = null;
        // hacer que la fecha creacion se ponga sin el usuario
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen', sql.VarChar(150), Personajes.imagen)
                .input('pNombre', sql.VarChar(50), Personajes.nombre)
                .input('pEdad', sql.Int, Personajes.edad)
                .input('pPeso', sql.Float, Personajes.peso)
                .input('pHistoria', sql.VarChar(350), Personajes.historia)
                .query(`INSERT INTO Personaje (imagen, nombre, edad, peso, historia)
                                            VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)`);
            returnEntity = result.recordsets;
            return returnEntity;
        }
        catch (error) {
            res.send(error);
        }
        
    }

    //obtener todos los personajes
    getAll = async () => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                //aplicar un query 
                .query('SELECT * FROM Personajes')
            //mostrarlo
            return result.recordset
        } catch (error) {
            res.status(500);
            res.send(error);
        }
    }

    //obtener personaje por nombre
    getPersonajeByName = async (name,res) => {
        try {
            console.log("funcion")
            let pool = await sql.connect(config);
            const result = await pool
                .request()
                .input("nombre", name)
                .query('SELECT * FROM Personajes WHERE nombre = @nombre');
                console.log(result)
                return result.recordset
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    };

    // //borrar personaje por id
    // deleteById = async (Id) => {
    //     let rowsAffected = 0;
    //     try {
    //         let pool = await sql.connect(config);
    //         let result = await pool.request()
    //             .input('pId', sql.Int, Id)
    //             .query("DELETE FROM Personajes WHERE Id = @pId");
    //         rowsAffected = result.rowsAffected;
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     return rowsAffected;
    // }


    

}

export default PersonajesServices;