const express = require('express');
const app = express();
const port = 3333;

app.get('/staff', (req, res) => {
  const staff = [
    'Adrian (VugbKat)', 'Andrea', 'Bunnyzluver1998', 'FunDog', 'HEXADUCK',
    'John N. Brewtendo', 'Khentendo', 'KittenPeng', 'Meng', 'Mr.Ghosty',
    'Preblox', 'Drag0n_A13', 'Thom', 'SatellaGuy', 'Somarix', 'Technet',
    'cannedfart', 'cool guy', 'gilberr', 'nebulagamez', 'very broken ps3',
    'vista', 'ENO yosh :3', 'synikers', 'sam.', 'Ragy'
  ];
  res.json({ staff });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});