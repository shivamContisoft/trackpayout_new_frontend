import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpcalculatorComponent } from './dpcalculator.component';

describe('DpcalculatorComponent', () => {
  let component: DpcalculatorComponent;
  let fixture: ComponentFixture<DpcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
