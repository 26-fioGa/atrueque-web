import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        CommonModule
    ],
    declarations: [
        // SHARED COMPONENTS
        InputComponent,
        ButtonComponent,
        LoaderComponent,
        SnackbarComponent,
        NavbarComponent
    ],
    exports: [
        InputComponent,
        ButtonComponent,
        LoaderComponent,
        SnackbarComponent,
        NavbarComponent
    ],
    providers: [],
})
export class SharedModule { }
