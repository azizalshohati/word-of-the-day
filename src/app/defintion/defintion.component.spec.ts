import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefintionComponent } from './defintion.component';

describe('DefintionComponent', () => {
  let component: DefintionComponent;
  let fixture: ComponentFixture<DefintionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefintionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefintionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
