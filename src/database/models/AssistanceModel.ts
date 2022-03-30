import { DataTypes, Model } from 'sequelize';
import db from '.';
import Client from './ClientModel';
import User from './UserModel';

class Assitance extends Model {
  public id: number;

  public userid: number;

  public clientId: number;

  public title: string;

  public initialDate: Date;

  public deadline: number;

  public finallyDate: Date;

  public description: string;

  public progress: number;

  public alertSystem: boolean;

  public finishAssistance: boolean;
}

Assitance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASACADE',
      references: {
        model: 'clients',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initialDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deadeline: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finallyDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'assistances',
    timestamps: false,
  },
);

Assitance.belongsTo(User, { foreignKey: 'userId' });
Assitance.belongsTo(Client, { foreignKey: 'clientId' });

export default Assitance;
