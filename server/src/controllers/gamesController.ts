import { Request, Response } from 'express';
import pool from '../config/database';

class GameController {

    public index(req: Request, res: Response) {
        //pool.query("DESCRIBE games");
        res.json('games')
    }
}

const gameController = new GameController();
export default gameController;