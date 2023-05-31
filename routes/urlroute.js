import express from 'express';
import { Addurl, getUrl } from '../controllers/urlAdd.js';
const app = express();
app.use(express.json());

const router = express.Router();
router.get("/",(req,res)=>{
    res.send("welcome")
})

router.post("/addurl",Addurl)

router.get("/:key",getUrl)

export default router;