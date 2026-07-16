import express = require('express');
const { vehicleAgent } = require('../agents/vehicleAgent');
let router = express.Router();

router.post('/', async (req, res) => {
   const messages = req.body.messages;
   const response = await vehicleAgent(messages);
   res.json(response);
})
export default router;
