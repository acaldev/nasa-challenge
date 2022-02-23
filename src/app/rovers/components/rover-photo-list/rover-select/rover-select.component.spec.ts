import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverSelectComponent } from './rover-select.component';

describe('RoverSelectComponent', () => {
  let component: RoverSelectComponent;
  let fixture: ComponentFixture<RoverSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
