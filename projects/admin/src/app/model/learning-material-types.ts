import { BaseEntity } from "./base-entity";

export class LearningMaterialTypes implements BaseEntity {
    createdBy: string;
    public code: string;

    public learningMaterialTypeName: string;
}