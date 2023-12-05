import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './core/http.service';
import { HttpInterceptorService } from './core/http-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    SharedModule
  ],
  providers: [HttpService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: HttpInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
