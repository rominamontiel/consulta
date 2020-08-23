import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowsComponent } from './box-shadows.component';

describe('BoxShadowsComponent', () => {
  let component: BoxShadowsComponent;
  let fixture: ComponentFixture<BoxShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
