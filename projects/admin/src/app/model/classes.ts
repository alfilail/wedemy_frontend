import { BaseMaster } from "@bootcamp-core/models/base-master";
import { Users } from "./users";

export class Classes extends BaseMaster {
    public code: string;

    public className: string;

    public description: string;

    public thumbnailImg: string;

    public fileType: string;

    public quota: number;

    public idTutor: Users = new Users();
}