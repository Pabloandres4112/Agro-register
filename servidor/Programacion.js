const express = require('express');
const bodyParsen = require('body-parser')
const servidor  = express();

servidor.listen(3000,()=>{
    console.log('');
})


servidor.use(bodyParsen.json())
