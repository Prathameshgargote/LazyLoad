import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/componets/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './shared/componets/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { IntercepotrInterceptor } from './interceptor/intercepotr.interceptor';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
         {
      provide: HTTP_INTERCEPTORS,
      useClass:IntercepotrInterceptor ,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule   {
  constructor(){
    console.log('App module call');
    
  }
}
