import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import { AuthService } from "@bootcamp-homepage/services/auth.service";
import { ToastService } from "@bootcamp-homepage/services/toast.service";
@Injectable()
export class HttpIntercept implements HttpInterceptor {

    constructor(private toast: ToastService, private auth: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.auth.getToken();

        let reqNew = req.clone({
            setHeaders: { 'Authorization': `Bearer ${token}` }
        });
        return next.handle(reqNew).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        console.log('request succeeded');
                        console.log(event);
                        if (event.body != null){
                            if (event.body.ok == false) {
                                this.toast.errorToast(event.body.message)
                            } else if (event.body.ok == true && event.body.message) {
                                this.toast.successToast(event.body.message)
                            }
                        }
                    }
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        console.log('request failed');
                        console.log(error);
                        if (error.error != null){
                        this.toast.errorToast(error.error.message)
                        }
                    }
                }
            ))
    }

}