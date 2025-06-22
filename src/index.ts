import express,{ Express} from 'express';

import bullBoardAdapter from './config/bullBoardConfig';
import serverConfig from './config/serverConfig';
import sampleQueueProducer from './producers/sampleQueueProducer';
import apiRouter from './routes';
import { SampleWorker } from './workers/sampleWorker';


const app: Express = express();

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());


app.listen(serverConfig.PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');

    sampleQueueProducer('SampleJob', {
        name:"SampleJob",
        company:"Algocode",
        position:"SDE 2 at Algocode",
        location:"Remote"

    });

});

