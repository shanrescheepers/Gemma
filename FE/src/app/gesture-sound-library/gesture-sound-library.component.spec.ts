import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureSoundLibraryComponent } from './gesture-sound-library.component';

describe('GestureSoundLibraryComponent', () => {
  let component: GestureSoundLibraryComponent;
  let fixture: ComponentFixture<GestureSoundLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureSoundLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureSoundLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
