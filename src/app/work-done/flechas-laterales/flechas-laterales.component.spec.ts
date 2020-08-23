import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechasLateralesComponent } from './flechas-laterales.component';

describe('FlechasLateralesComponent', () => {
  let component: FlechasLateralesComponent;
  let fixture: ComponentFixture<FlechasLateralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlechasLateralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlechasLateralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
