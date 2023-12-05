// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { API } from '../core/endpoints.def';
import { SnackbarService } from '../shared/components/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpService: HttpService, private snackbarService: SnackbarService, private router: Router) { }

  login(credentials: any) {
    return this.httpService.post<any>(API.AUTH.LOGIN, credentials).subscribe(
      (response) => {
        //Se guardan los token en localStorage
        localStorage.setItem('access_token', response.tokens.access);
        localStorage.setItem('refresh_token', response.tokens.refresh);
        this.router.navigate(['/home']);
      }
    );
  }

  register(credentials: any) {
    return this.httpService.post<any>(API.AUTH.REGISTER, credentials).subscribe(
      () => {
        this.snackbarService.showMessage('Usuario creado con éxito.', 'success');
        this.router.navigate(['/auth/login']);
      }
    );
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
