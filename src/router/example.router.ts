import express from 'express';
import {ExampleController} from "../controller";

const router = express.Router();

router.get('/example', (req, res, next) => {
    const example = new ExampleController()
    res.send(example.exampleGet());
});

export default router;