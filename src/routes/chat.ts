import express from 'express';
import { vehicleAgent } from '../agents/vehicleAgent';
let router = express.Router();
import {ApiService} from '../services/api.service';
const apiService = new ApiService();
router.post('/', async (req, res) => {
   const messages = req.body.messages;
   const response = await vehicleAgent(messages);
   res.json(response);
})
export default router;
