import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpHubComponent } from './help-hub.component';

describe('HelpHubComponent', () => {
  let component: HelpHubComponent;
  let fixture: ComponentFixture<HelpHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
