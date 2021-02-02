import { BaseEntity } from "./base-entity";

export abstract class BaseMaster extends BaseEntity {

    isActive?: boolean;
    // updatedBy: string;
    updatedAt?: Date;

}