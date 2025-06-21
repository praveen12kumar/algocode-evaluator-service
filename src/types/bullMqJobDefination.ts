import { Job } from "bullmq";

//job defination
export interface IJob{
    name: string,
    payload?: Record<string, unknown>,      // data
    handle: (job?: Job) => void,            // Job handler (How job will perform)
    failed: (job?: Job) => void             // Incase if the Job failed
}

