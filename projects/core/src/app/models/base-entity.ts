<<<<<<< HEAD
export class BaseEntity {

    id: string;
    createdBy: string;
    createdAt: Date;
    version: number;

=======
export abstract class BaseEntity {
    id?: string;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: Date
    updatedAt?: Date;
    version?: number;
>>>>>>> 129911ee9637c98bb5786f8a3c76507b1da65b65
}