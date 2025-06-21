import { Job, Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJOb from "../jobs/SampleJobs";

export function SampleWorker(queueName:string){
    new Worker(
        queueName, 
        async (job:Job) => {
        
            if(job.name === 'SampleJob'){
            const sampleJobInstance = new SampleJOb(job.data);

            sampleJobInstance.handle(job);

            return true;
        }
    },{
        connection:redisConnection
    }
    );
}