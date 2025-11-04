const korisnici=[{id:1, ime:'David', prezime:'Johnson'},
    {id:2, ime:'Moki', prezime:'Bubic'},
    {id:3, ime:'Bibi', prezime:'Jarkov'}
]

const express = require('express');
const path=require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
res.sendFile( 'index.html', {root:'public'});
});

app.get('/about', (req, res) => {
res.sendFile('about.html', {root:'public'});
});

app.get('/users', (req, res) => {
    console.log("podaci: ", korisnici)
res.json(korisnici);
});

app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});