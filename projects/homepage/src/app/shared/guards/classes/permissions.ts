import { ROLE } from "@bootcamp-homepage/constants/roles";

export class Permissions {
    canActivate(userToken: string, userRole: string, route: string): boolean {
        if(userToken==null) {
            return false;

        } else {
            if (route=="admin") {
                if (userRole == ROLE.ADMIN) {
                    return true;
                } else if (userRole == ROLE.SPRADMIN) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return true;
            }
        }
    }
}