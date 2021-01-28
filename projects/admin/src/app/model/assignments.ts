import { AssignmentTypes } from "./assignment-types";
import { DetailModuleRegistrations } from "./dtl-module-registrations";

export class Assignments {
    public code: string;

    // public byte[] file;

    public fileType: string;

    public idDetailModuleRegistration: DetailModuleRegistrations;

    public idAssignmentType: AssignmentTypes;
}