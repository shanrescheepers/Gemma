import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboarding1Component } from './onboarding1.component';

describe('Onboarding1Component', () => {
  let component: Onboarding1Component;
  let fixture: ComponentFixture<Onboarding1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onboarding1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboarding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
