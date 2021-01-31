import { Classes } from "./classes";

export class DetailClasses {

    id: string; 
    idClass: Classes = new Classes();
    code: string;
    startDate: Date;
    endDate: Date;
    startTime: Date;
    endTime: Date;

    status: string;
    totalModules: number;
    totalHours: number;
    countMats: number;
    totalParticipant: number;

}