import { BaseEntity } from "./base-entity";

export class AssignmentTypes implements BaseEntity {
    createdBy: string;
    public code: string;

    public assignmentTypeName: string;
}