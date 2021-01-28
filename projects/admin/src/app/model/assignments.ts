import { AssignmentTypes } from "./assignment-types";
import { BaseEntity } from "./base-entity";
import { DetailModuleRegistrations } from "./dtl-module-registrations";

export class Assignments implements BaseEntity {
    createdBy: string;
    public code: string;

    // public byte[] file;

    public fileType: string;

    public idDetailModuleRegistration: DetailModuleRegistrations;

    public idAssignmentType: AssignmentTypes;
}