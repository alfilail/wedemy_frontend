import { LearningMaterials } from "./learning-materials";
import { ModuleRegistrations } from "./module-registrations";

export class DetailModuleRegistrations {
    public idModuleRegistration: ModuleRegistrations;

    public idLearningMaterial: LearningMaterials;

    public orderNumber: number;

    public scheduleDate: Date;
}