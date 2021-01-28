import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "@bootcamp-homepage/services/auth.service";

@Injectable()
export class HttpIntercept implements HttpInterceptor {

    constructor(private auth: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.auth.getToken();

        let reqNew = req.clone({
            setHeaders : {'Authorization' : `Bearer ${token}`}
        });
        console.log(req.url);
        console.log(req.body);
        return next.handle(reqNew);
    }

}