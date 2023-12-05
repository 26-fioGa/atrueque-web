import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }