import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoginComponent,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],
  
})
export class MainModule { }
