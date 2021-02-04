import { ROLE } from "@bootcamp-homepage/constants/roles";

export class Permissions {
    canActivate(userToken: string, userRole: string, route: string): boolean {
        if(userToken==null) {
            console.log("hit this "+route)
            
            return false;
            
        } else {
            console.log("hit this "+route) 
            if (userRole != ROLE.ADMIN && route=="admin"){
                console.log("hit that "+userRole)
                return false;
            } else if (userRole == ROLE.ADMIN && route=="admin") {
                return true;
            } else {
                return true;
            }
        }
    }
}