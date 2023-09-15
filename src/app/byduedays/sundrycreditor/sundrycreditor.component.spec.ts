import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundrycreditorComponent } from './sundrycreditor.component';

describe('SundrycreditorComponent', () => {
  let component: SundrycreditorComponent;
  let fixture: ComponentFixture<SundrycreditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundrycreditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundrycreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
