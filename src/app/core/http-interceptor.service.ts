// http-interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { LoaderService } from '../shared/components/loader/loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();

    const token = this.authService.getToken();

    if (token) {
      console.log('token ', token);
      
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.hideLoader();
      })
    );
  }
}
