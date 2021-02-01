import { Byte } from "@angular/compiler/src/util";
import { Users } from "@bootcamp-admin/model/users";
import { BaseMaster } from "@bootcamp-core/models/base-master";

export class Classes extends BaseMaster {

    code: string;
    className: string;
    description: string;
    thumbnailImg: string;
    fileType: string;
    quota: number;
    idTutor: Users = new Users();

}