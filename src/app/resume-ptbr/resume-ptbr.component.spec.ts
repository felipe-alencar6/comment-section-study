import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePtbrComponent } from './resume-ptbr.component';

describe('ResumePtbrComponent', () => {
  let component: ResumePtbrComponent;
  let fixture: ComponentFixture<ResumePtbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePtbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePtbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
