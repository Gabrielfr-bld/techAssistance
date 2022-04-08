import User from '../database/models/UserModel';
import { UserI } from '../interfaces/UserInterfaces';

const create = async ({ name, typeUser, birthDate, phone, email, password }:UserI) => {
  const createUser = await User.create({
    name,
    typeUser,
    birthDate,
    phone,
    email,
    password,
  });

  return createUser;
};

export default { create };
