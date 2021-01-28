import { Assignments } from "./assignments";
import { Grades } from "./grades";
import { SubmissionStatus } from "./submission-status";
import { Users } from "./users";

export class AssignmentSubmissions {
    // public byte[] file;

    public fileType: string;

    public score: number;

    public submitDateTime: Date;

    public idParticipant: Users;

    public idGrade: Grades;

    public idSubmissionStatus: SubmissionStatus;

    public idAssignments: Assignments;
}