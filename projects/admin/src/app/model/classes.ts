import { BaseEntity } from "./base-entity";
import { Users } from "./users";

export class Classes implements BaseEntity {
    public createdBy: string;
    public code: string;

    public className: string;

    public description: string;

    // public thumbnailImg : number[];

    public fileType: string;

    public quota: number;

    public idTutor: Users;
}