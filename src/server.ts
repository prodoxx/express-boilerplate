import { config } from 'dotenv';
import moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@': `${__dirname}`,
});

if (process.env.NODE_ENV !== 'production') {
  config();
}

import ExpressConfig from '@/config/express.config';

const app = ExpressConfig();
const PORT = process.env.PORT ?? 4100;

const server = app.listen(PORT, () => console.log('Server Running on Port ' + PORT));
