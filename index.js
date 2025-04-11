import express from "express";

const app = express();
const port = 3000;
let usuario = {"nombre": "Ana", "edad": 25 };
let materias = [ { "nombre": "Matemática" }, { "nombre": "Lengua" } ];

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
    console.log(req.body);
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: 'Falta la materia' });
  
    materias.push(nombre);
    res.status(201).json({ mensaje: 'Materia agregada', materias });
  });

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})