import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Validators from 'src/app/utils/form/Validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  goRegister() {
    this.router.navigate(['/auth/register'], {
      skipLocationChange: true,
      replaceUrl: true,
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      user: new FormControl('',  [Validators.required('usuario o correo electrónico')]),
      password: new FormControl('', [Validators.required('contraseña')]),
    });
  }
}