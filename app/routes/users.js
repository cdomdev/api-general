import express from "express";
const router = express.Router();
import {createItems, getItems, updateItems, deleteItems} from '../controllers/users.js'

router.post('/create', createItems)
router.get('/get', getItems)
router.put('/update/:id', updateItems)
router.delete('/delete/:id', deleteItems)



module.exports = router
