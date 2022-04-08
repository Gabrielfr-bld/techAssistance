import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = Router();

route.post('/register', UserController.create);

export default route;
