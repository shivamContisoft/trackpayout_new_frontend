import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbyuserComponent } from './logbyuser.component';

describe('LogbyuserComponent', () => {
  let component: LogbyuserComponent;
  let fixture: ComponentFixture<LogbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
