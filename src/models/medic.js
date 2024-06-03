import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Medic = sequelize.define(
  "medics",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
      },
    image: {
        type: DataTypes.STRING,
        default :""
      },
    services: {
        type: DataTypes.STRING,
        default :""
      },
  
     certifications: {
        type: DataTypes.STRING,
        default :""
      },
     state: {
        type: DataTypes.STRING,
        default :"activo"
      }
    },
    {  timestamps: false,
      }
);


