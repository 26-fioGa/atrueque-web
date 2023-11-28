// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type stateMessage = 'success' | 'error';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  message: string;
  stateMessage: stateMessage;
  private snackbarSubject = new BehaviorSubject<boolean>(false);
  snackbarState = this.snackbarSubject.asObservable();

  showMessage(message: string, state: stateMessage): void {
    this.message = message;
    this.stateMessage = state;
    this.snackbarSubject.next(true);
    
    setTimeout(() => {
        this.hideMessage();
    }, 5000);
  }

  hideMessage(): void {
    this.snackbarSubject.next(false);
  }
}
