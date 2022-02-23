import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverPhotoListComponent } from './rover-photo-list.component';

describe('RoverPhotoListComponent', () => {
  let component: RoverPhotoListComponent;
  let fixture: ComponentFixture<RoverPhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverPhotoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
