import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  isShowing: boolean = false;

  constructor(public snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarService.snackbarState.subscribe((state) => {
      this.isShowing = state;
    });
  }
}
