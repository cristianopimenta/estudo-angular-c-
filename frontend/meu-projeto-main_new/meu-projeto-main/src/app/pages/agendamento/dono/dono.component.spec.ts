import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoComponent } from './dono.component';

describe('BanhoComponent', () => {
  let component: DonoComponent;
  let fixture: ComponentFixture<DonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonoComponent]
    });
    fixture = TestBed.createComponent(DonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
