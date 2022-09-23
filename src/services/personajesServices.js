import config from "../../dbConfig.js";
import sql from 'mssql'

class PersonajesServices {
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
            console.log(error)
        }
        
        
    }
}

export default PersonajesServices;