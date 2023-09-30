const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',          //por padrão localhost   
      user : 'root',              // por padrão root
      password : 'up10111256!',   // sua senha definida mysql
      database : 'escola'         // nome do seu banco criado
    }
    
  });
  
module.exports = knex
