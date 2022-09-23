import config from "../../dbConfig.js";
import sql from 'mssql'

//traer todas las peliculas
class PeliculasServices {
    getAll = async () => {
        //llamar base de datos
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            //aplicar un query 
                .query('SELECT * FROM Peliculas')
            //mostrarlo
            return result.recordset
        } catch (error) {
            console.log(error)
        }
        
        
    }
}

export default PeliculasServices;