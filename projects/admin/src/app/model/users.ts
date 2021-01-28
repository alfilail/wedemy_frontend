import { BaseEntity } from "./base-entity";
import { Profiles } from "./profiles";
import { Roles } from "./roles";

export class Users implements BaseEntity {
    createdBy: string;
    public username: string;

    public userPassword: string;

    public idProfile: Profiles;

    public idRole: Roles;
}