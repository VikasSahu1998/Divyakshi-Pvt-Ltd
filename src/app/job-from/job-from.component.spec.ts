import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFromComponent } from './job-from.component';

describe('JobFromComponent', () => {
  let component: JobFromComponent;
  let fixture: ComponentFixture<JobFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
