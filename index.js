import express from "express"
import routerPersonajes from "./src/controllers/personajesController.js";

//express es la funcion que va guardada adentro de app
const app = express();

//constante del puerto a abrir
const port = 3000;

app.use(express.json()) 
app.use("/api/personajes", routerPersonajes)

app.listen(port, () => {
    console.log(`tuki ${port}`)
})



// res es respuesta
// cuando app recibe un get, manda lo que hay adentro


// app.get('/', (req, res) => {
//     res.send('jijiji');
// })

//

