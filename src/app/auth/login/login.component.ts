import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Validators from 'src/app/utils/form/Validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  goRegister() {
    this.router.navigate(['/auth/register']);
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      user: new FormControl('',  [Validators.required('usuario o correo electrónico')]),
      password: new FormControl('', [Validators.required('contraseña')]),
    });
  }

  login() {
    this.authService.login({
      email: this.form.get('user')?.value,
      password: this.form.get('password')?.value
    })
  }
}