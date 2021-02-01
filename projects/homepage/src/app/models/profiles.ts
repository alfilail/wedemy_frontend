import { BaseMaster } from "@bootcamp-core/models/base-master";

export class Profiles extends BaseMaster {

    fullName: string;
    idNumber: string;
    birthPlace: string;
    birthDate: Date;
    phone: string;
    address: string;
    email: string;
    
}