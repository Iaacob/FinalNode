import config from "../../dbConfig.js";
import sql from 'mssql'

class PersonajesServices {
    getAll = async () => {
        //llamar base de datos
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Personajes')
            return result.recordset
        } catch (error) {
            console.log(error)
        }
        //aplicar un query 
        //mostrarlo
    }
}

export default PersonajesServices;