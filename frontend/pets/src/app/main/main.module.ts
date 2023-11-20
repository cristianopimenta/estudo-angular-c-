import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoginComponent,
    BrowserModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }
