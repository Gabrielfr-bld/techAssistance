require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: "techAssistance",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    timeZone: "Z'"  
  },
  logging: false,
}