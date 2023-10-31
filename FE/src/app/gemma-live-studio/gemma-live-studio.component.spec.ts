import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemmaLiveStudioComponent } from './gemma-live-studio.component';

describe('GemmaLiveStudioComponent', () => {
  let component: GemmaLiveStudioComponent;
  let fixture: ComponentFixture<GemmaLiveStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemmaLiveStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemmaLiveStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
