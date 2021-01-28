import { Byte } from "@angular/compiler/src/util";
import { BaseTransaction } from "projects/core/src/app/models/base-transaction";

export class AssignmentSubmissions extends BaseTransaction {

    file: Byte[];
    fileType: string;
    score: number;
    submitDateTime: Date;
    // idParticipant: use
    // idGrade
    // idSubmissionStatus
    // idAssignments:

}