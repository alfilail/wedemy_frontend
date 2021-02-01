import { Time } from "@angular/common";
import { Approvements } from "./approvements";
import { DetailModuleRegistrations } from "./dtl-module-registrations";
import { Users } from "./users";

export class Presences {

    public idDetailModuleRegistration: DetailModuleRegistrations;

    public presenceTime: Time;

    public idUser: Users;

    public idApprovement: Approvements;
}