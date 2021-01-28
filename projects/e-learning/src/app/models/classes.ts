import { Byte } from "@angular/compiler/src/util";
import { BaseMaster } from "projects/core/src/app/models/base-master";

export class Classes extends BaseMaster {

    code: string;
    className: string;
    description: string;
    thumbnailImg: Byte[] = [];
    fileType: string;
    quota: number;
    idTutor: number;

}