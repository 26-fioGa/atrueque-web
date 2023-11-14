import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Validators from 'src/app/utils/form/Validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  goLogin() {
    this.router.navigate(['/login'], {
      skipLocationChange: true,
      replaceUrl: true,
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('',  [Validators.required('nombre de usuario')]),
      email: new FormControl('', [Validators.required('correo electrónico'), Validators.email]),
      psw: new FormControl('', [Validators.required('contraseña')]),
      confirmPsw: new FormControl('', [Validators.required('contraseña')]),
    });
  }
}