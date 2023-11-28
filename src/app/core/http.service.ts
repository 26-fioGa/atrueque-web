// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { SnackbarService } from '../shared/components/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private snackbarService: SnackbarService) {}

  get<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url).pipe(
      catchError((error) => {
        this.handleError(error);
        throw error;
      })
    );
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, data).pipe(
      catchError((error) => {
        this.handleError(error);
        throw error;
      })
    );
  }

  private handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      console.error('Error en la solicitud:', error);
      const errorMessage = error.error.msg;
      this.snackbarService.showMessage(errorMessage, 'error');
    }
  }
}
