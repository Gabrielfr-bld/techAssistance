import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/UserService';

const create = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const { name, typeUser, birthDate, phone, email, password } = req.body;

    const user = await UserService.create({
      name,
      typeUser,
      birthDate,
      phone,
      email,
      password,
    });

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
};

export default { create };
