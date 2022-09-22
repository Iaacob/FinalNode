import express from "express"
import router from "./src/controllers/personajesController.js";

//express es la funcion que va guardada adentro de app
const app = express();

//constante del puerto a abrir
const port = 3000;

app.listen(port, () => {
    console.log(`tuki ${port}`)
})

app.use(router)

// res es respuesta
// cuando app recibe un get, manda lo que hay adentro


// app.get('/', (req, res) => {
//     res.send('jijiji');
// })

//

console.log("hola")