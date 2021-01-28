import { BaseEntity } from "./base-entity";

export class LearningMaterials implements BaseEntity {
    createdBy: string;
    public code: string;

    public learningMaterialName: string;

    public description: string;

    // public byte[] file;

    public fileType: string;
}