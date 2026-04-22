const {Sequelize} = require('sequelize');
const mysql2 = require('mysql2')
const dotenv = require('dotenv');

dotenv.config();

const templateEnv = ['NAME', 'USER', 'PASS', 'HOST', 'PORT']
const nameProject = ['BUKUTAMU']

const setupData = nameProject.reduce((acc, curr) => {
  acc[curr] = templateEnv.map((item, index) => {
    const data = process.env[`MYSQL_${curr}_${item}`]
    if (!data) throw new Error (`Variabel di env ada yang kosong! Cek file .env kamu, hint = MYSQL_${curr}_${item}`)
    return data
  })
  return acc
}, {})

db = Object.entries(setupData).reduce((acc, [name, property]) => {
  acc[name] = new Sequelize(property[0], property[1], property[2], {
    host: property[3],
    port: property[4],
    dialect: 'mysql',
    dialectModule: mysql2,
    logging:false
  })
  return acc
}, {})

const testConnection = async () => {
  try {
    await Promise.all(
       nameProject.map(async (item, index) => {
        await Promise.all([
          db[item].authenticate(),
          db[item].sync()
        ])

        if (process.env.NODE_ENV == 'production') {
          await Promise.all ([
                db[item].sync({ alter: true })
          ]) 
        }

        console.log(`✅ Koneksi ke database ${item} berhasil.`);
      })
    )

    console.log('✅ MySQL connection successful');
  } catch (err) {
    console.error('❌ MySQL connection error:', err);
    process.exit(-1);
  }
}

module.exports = {db : db['BUKUTAMU'], testConnection}