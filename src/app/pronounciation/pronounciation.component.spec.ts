import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounciationComponent } from './pronounciation.component';

describe('PronounciationComponent', () => {
  let component: PronounciationComponent;
  let fixture: ComponentFixture<PronounciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
