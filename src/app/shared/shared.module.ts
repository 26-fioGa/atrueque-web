import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';


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
        LoaderComponent
    ],
    exports: [
        InputComponent,
        ButtonComponent,
        LoaderComponent
    ],
    providers: [],
})
export class SharedModule { }
