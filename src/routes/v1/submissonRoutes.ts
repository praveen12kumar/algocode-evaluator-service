import express from 'express';

import { addSubmission } from '../../controllers/SubmissonController';
import { createSubmissionZodSchema } from '../../dtos/CreateSubmissionDTo';
import { validate } from '../../validators/createSubmissionValidator';

const submissionRouter = express.Router();

submissionRouter.post('/', validate(createSubmissionZodSchema),  addSubmission);

export default submissionRouter;