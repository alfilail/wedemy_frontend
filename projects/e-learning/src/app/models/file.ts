import { BaseMaster } from "@bootcamp-core/models/base-master";

export class File extends BaseMaster {
  file?: Blob;
  id?: string;
  isActive?: boolean;
  type?: string;
  version?: number;
}