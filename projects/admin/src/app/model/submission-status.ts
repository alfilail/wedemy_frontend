import { BaseEntity } from "./base-entity";

export class SubmissionStatus implements BaseEntity {
    createdBy: string;

    public code: string;

    public submissionStatusesName: string;
}