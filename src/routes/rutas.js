const express = require('express');
const router = express.Router();

const archivo = require('../models/dtabse'); 

router.get('/', async (req ,res)=>{
    const buscar = await archivo.find();
    res.json(buscar);
})

router.get('/:id', async (req ,res)=>{
    const buscarid = await archivo.findById(req.params.id);
    res.json(buscarid);
})

router.post('/', async(req,res)=>{
      
const guardar = new archivo(req.body);
await guardar.save();
res.json({
    estado: 'tarea recivida'
});

})
router.put('/:id',async (req,res)=>{

await archivo.findByIdAndUpdate(req.params.id, req.body);
res.json({estado: 'tarea actualizada'});

})

router.delete('/:id',async (req,res)=>{

 await archivo.findByIdAndDelete(req.params.id)
 .then(()=>{ res.json({ estado: 'tarea borrada'})})
 .catch((err)=>{console.error(err)})

})

module.exports = router;