import express  from 'express';
import vehicleAgent from '../agents/vehicleAgent';
let router = express.Router();

router.post('/', async (req, res) => {
   console.log("Received request:", req);
   const messages = req.body.messages;
   const response = await vehicleAgent(messages);
   res.send(response);
})
export default router;
