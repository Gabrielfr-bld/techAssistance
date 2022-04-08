import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = Router();

route.post('/registerUser', UserController.create);

export default route;
