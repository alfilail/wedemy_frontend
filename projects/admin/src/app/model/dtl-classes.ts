import { Time } from "@angular/common";
import { Classes } from "./classes";

export class DetailClasses {
    public idClass: Classes;

    public code: string;

    public startDate: Date;

    public endDate: Date;

    public startTime: Time;

    public endTime: Time;
}