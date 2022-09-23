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

    //traer pelicula por titulo
    getPeliculaByTitulo = async ( req,res ) => {
        const { titulo } = req.params;
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input("titulo", sql.String, titulo)
                .query('SELECT * FROM Peliculas WHERE titulo = @titulo');
            res.json(result.rows).status(200);
        } 
        catch (error) {
            res.status(500);
            res.send(error.msg("Error en el servidor"));        
        }
    };
        

}

export default PeliculasServices;