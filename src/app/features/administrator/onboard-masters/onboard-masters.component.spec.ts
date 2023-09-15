import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardMastersComponent } from './onboard-masters.component';

describe('OnboardMastersComponent', () => {
  let component: OnboardMastersComponent;
  let fixture: ComponentFixture<OnboardMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
