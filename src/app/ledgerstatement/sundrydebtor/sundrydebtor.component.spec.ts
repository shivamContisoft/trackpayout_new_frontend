import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SundrydebtorComponent } from './sundrydebtor.component';

describe('SundrydebtorComponent', () => {
  let component: SundrydebtorComponent;
  let fixture: ComponentFixture<SundrydebtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SundrydebtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SundrydebtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
