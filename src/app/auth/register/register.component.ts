import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Validators from 'src/app/utils/form/Validators';
import { AuthService } from '../auth.service';
import { fadeToLeftAnimation } from 'src/app/utils/animation/route-animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeToLeftAnimation]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  goLogin() {
    this.router.navigate(['/auth/login']);
  }

  createFormGroup(): FormGroup {
    const form =  new FormGroup({
      username: new FormControl('',  [Validators.required('nombre de usuario')]),
      email: new FormControl('', [Validators.required('correo electrónico'), Validators.email]),
      psw: new FormControl('', [Validators.required('contraseña'), Validators.minLength(8), Validators.isValidPassword]),
      confirmPsw: new FormControl('', [Validators.required('contraseña')]),
    });
    return form;
  }

  register() {
    this.authService.register({
      email: this.form.get('email')?.value,
      password: this.form.get('psw')?.value,
      UserName: this.form.get('username')?.value
    })
  }
}