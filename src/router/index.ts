import express from 'express';
import exampleRouter from './example.router'

const app = express();
const router = express.Router();

router.use('/', exampleRouter);
/*
router.get('/test', (req, res, next) => {
  //res.json
    res.send({
        test: 'sfsfsf'
    });
    console.log('Time: ', Date.now());
    next();
  });
*/
export default router;
