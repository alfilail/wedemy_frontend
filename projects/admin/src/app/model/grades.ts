import { BaseEntity } from "./base-entity";

export class Grades implements BaseEntity {
    createdBy: string;
    public code: string;

    public minScore: number;

    public maxScore: number;
}