import { Time } from "@angular/common";
import { User } from "../pages/auth/models";
import { Approvements } from "./approvements";
import { BaseEntity } from "./base-entity";
import { DetailModuleRegistrations } from "./dtl-module-registrations";
import { Users } from "./users";

export class Presences implements BaseEntity {
    createdBy: string;

    public idDetailModuleRegistration: DetailModuleRegistrations;

    public presenceTime: Time;

    public idUser: Users;

    public idApprovement: Approvements;
}