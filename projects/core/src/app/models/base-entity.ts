export abstract class BaseEntity {
    id?: string;
    createdBy?: string;
    createdAt?: Date;
    // updatedBy?: Date
    // updatedAt?: Date;
    version?: number;
}