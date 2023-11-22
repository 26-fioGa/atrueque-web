import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    providers: [AuthService],
})
export class AuthModule { }