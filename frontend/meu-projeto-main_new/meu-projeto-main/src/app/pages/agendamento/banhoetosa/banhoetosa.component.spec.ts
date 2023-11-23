import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhoetosaComponent } from './banhoetosa.component';

describe('BanhoetosaComponent', () => {
  let component: BanhoetosaComponent;
  let fixture: ComponentFixture<BanhoetosaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanhoetosaComponent]
    });
    fixture = TestBed.createComponent(BanhoetosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
