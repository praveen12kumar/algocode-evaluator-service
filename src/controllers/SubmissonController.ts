 
import { Request, Response } from "express";

import { CreateSubmissionDTo } from "../dtos/CreateSubmissionDTo";

function addSubmission(req: Request, res: Response) {
    
    const submissionDTo = req.body as CreateSubmissionDTo;

    res.status(201).json({ 
        success: true,
        message: "Submission added successfully",
        error: {},
        data: submissionDTo
    });
}

export { addSubmission };