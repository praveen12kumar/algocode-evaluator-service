import express,{Request,Response, Express} from 'express';
import serverConfig from './config/serverConfig';

const app: Express = express();


app.get('/home', (req:Request, res:Response)=>{
    console.log(req);
    res.send('Hello World!')
})

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is listening on port ${serverConfig.PORT}`)
});