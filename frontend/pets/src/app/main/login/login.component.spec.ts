import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({

  selector:'app-login',

  templateUrl:'./login.component.html',

  styleUrls: ['./login.component.css']

}):

export class loginComponent {form;

  constructor(privateformBuilder:FormBuilder) {

      this.criarForm();

  }

  criarForm(){

      this.form = this.formBuilder.group({

          email: [''],

          senha: ['']

      })

  }

}