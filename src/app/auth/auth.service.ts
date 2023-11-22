// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { API } from '../core/endpoints.def';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpService: HttpService) {}

  login(credentials: any) {
    return this.httpService.post<any>(API.AUTH.LOGIN, credentials);
  }

  register(credentials: any) {
    return this.httpService.post<any>(API.AUTH.REGISTER, credentials).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
