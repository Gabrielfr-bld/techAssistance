import { DataTypes, Model } from 'sequelize';
import db from '.';

class Client extends Model {
  public id: number;

  public name: string;

  public email: string;

  public phoneContact: number;

  public address: number;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneContact: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'clients',
    timestamps: false,
  },
);

export default Client;
