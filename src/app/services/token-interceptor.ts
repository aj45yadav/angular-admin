import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token;
  constructor(public router: Router, public dialog: MatDialog) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.token) {
      request = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token
        }
      });
    } else {
      this.router.navigate([`/`]);
    }

    /**
     * continues request execution
     */
    return next.handle(request).pipe(catchError((error, caught) => {
      // intercept the respons error and displace it to the console
      // console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      // navigate /delete cookies or whatever
      // console.log('handled error ' + err.status);
      localStorage.clear();
      this.router.navigate([`/`]);
      // tslint:disable-next-line:max-line-length
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    if (err.status === 400) {
      const info = {
        msg: 'Bad request',
        type: 'Alert',
      };
      alert(info);
    }
    if (err.status === 500) {
      const info = {
        msg: 'Internal Server Error.',
        type: 'Alert',
      };
      alert(info);
    }
    throw err;
  }
}
