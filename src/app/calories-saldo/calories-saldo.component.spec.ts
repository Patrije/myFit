import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesSaldoComponent } from './calories-saldo.component';

describe('CaloriesSaldoComponent', () => {
  let component: CaloriesSaldoComponent;
  let fixture: ComponentFixture<CaloriesSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriesSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
