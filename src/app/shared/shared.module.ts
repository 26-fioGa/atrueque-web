import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


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
        SnackbarComponent
    ],
    exports: [
        InputComponent,
        ButtonComponent,
        LoaderComponent,
        SnackbarComponent
    ],
    providers: [],
})
export class SharedModule { }
