/* eslint-disable no-console */
import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefination";


export default class SampleJOb implements IJob{
    name:string;
    payload?: Record<string, unknown> | undefined;
    constructor(payload:Record<string, unknown>){
        this.payload = payload;
        this.name  = this.constructor.name;
     }
    
     handle = ()=>{
        console.log("Handler of the Job called");
     };

     failed = (job?: Job): void=>{
        console.log("Job failed");
        if(job){
            console.log(job.id);
        }
     };
};