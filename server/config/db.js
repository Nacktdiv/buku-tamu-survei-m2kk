const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

const testConnection = async () => {
  try {
    await db.query('SELECT NOW()');
    console.log('✅ MySQL connection successful');
  } catch (err) {
    console.error('❌ MySQL connection error:', err);
    process.exit(-1);
  }
}


module.exports = {db, testConnection}