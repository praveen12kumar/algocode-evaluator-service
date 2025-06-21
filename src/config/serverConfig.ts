import { config } from "dotenv";

config();

export default {
    PORT: process.env.PORT || 3000,
    REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379'),
    REDIS_HOST: process.env.REDIS_HOST  || '127.0.0.1'
};