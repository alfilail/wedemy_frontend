import { BaseMaster } from "@bootcamp-core/models/base-master";

export class Profile extends BaseMaster {
  fullName?: string;
  idNumber?: string;
  birthPlace?: string;
  birthDate?: string; // pattern = yyyy-MM-dd
  phone?: string;
  addrees?: string;
  email?: string;
}