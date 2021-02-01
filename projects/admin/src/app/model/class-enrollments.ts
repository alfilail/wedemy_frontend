import { BaseMaster } from "@bootcamp-core/models/base-master";
import { DetailClasses } from "./dtl-classes";
import { Users } from "./users";

export class ClassEnrollments extends BaseMaster {

    public idDetailClass: DetailClasses = new DetailClasses();

    public idUser: Users = new Users();

    public isOngoing: Boolean;
}