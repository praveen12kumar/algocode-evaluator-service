import express,{ Express} from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';

const app: Express = express();

app.use('/api', apiRouter);



app.listen(serverConfig.PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${serverConfig.PORT}`);
});