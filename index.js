import express from "express";

const app = express();
app.use(express.json())
const port = 3000;
let usuario = {"nombre": "Ana", "edad": 25 };
const materias = [ { "nombre": "Matemática" }, { "nombre": "Lengua" } ];
let personas = [];

app.get('/', (req, res) => {
    res.send("Bienvenido a mi servidor");
})

app.get('/saludo', (req, res) => {
    res.send("Hola!");
})

app.get('/numero', (req, res) => {
    res.send((42).toString());
})

app.get('/usuario', (req, res) => {
    res.json(usuario);
})

app.get('/productos', (req, res) => {
    res.json([ "Mouse", "Teclado", "Monitor" ]);
})

app.get('/materias', (req, res) => {
    res.json(materias);
})

app.post('/nuevaMateria', (req, res) => {
    const nombre = req.body;
    if (!nombre) return res.status(400).json({ error: 'Falta la materia' }
    );

    materias.push(nombre);
    res.status(201).json({ mensaje: 'Materia agregada', materias });
  });

app.post('/nuevaPersona', (req, res) => {
    const persona = req.body;
    if (!persona) return res.status(400).json({ error: 'Falta la persona' });

    personas.push(persona);
    res.status(201).json({ mensaje: 'Materia agregada', personas });
    });

app.get('/personas', (req, res) => {
    res.json(personas);
    })

app.delete('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
  
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
  
    const eliminado = personas.splice(indice, 1);
    res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
  });

app.use((req, res, next) => {
    res.status(404).send('<img src="https://http.cat/404.jpg" alt="404 Not Found" />');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

