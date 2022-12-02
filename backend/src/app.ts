import 'dotenv/config';
import serverConnection from './server/server';
import { sequelize } from './models/connectionDb';

import env from './config/env';

const { server, app } = serverConnection;

(async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log(`Connection to ${env.dbDataBaseName} has been established successfully`);

    server.listen(app.get('port'), () => {
      console.log(`Express Server 🚀 running on PORT ${app.get('port')} - Worker ${process.pid}`);
    });
  } catch (err) {
    console.error('Unable to connect to database', err);
  }
})();
