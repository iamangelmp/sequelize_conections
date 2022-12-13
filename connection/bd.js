const { Sequelize } = require('sequelize');
require('dotenv').config()


// Option 3: Passing parameters separately (other dialects)
const base = new Sequelize(process.env.NAME_BD, process.env.USER_BD, process.env.PASS_BD, {
    host: process.env.HOST_BD,
    dialect: process.env.DIALEC_BD,
    port: process.env.PORT_BD
  });

//genera la conección a la bd
const connection = async function (){
    try {
        await base.authenticate()
        //base.sync();
        console.log( process.env.DIALEC_BD, ': OK' );
      } catch (error) {
        console.error('Unable to connect to the database', error);
      }
    }


  module.exports = {base, connection}