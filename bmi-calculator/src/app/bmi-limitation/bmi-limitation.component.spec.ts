import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiLimitationComponent } from './bmi-limitation.component';

describe('BmiLimitationComponent', () => {
  let component: BmiLimitationComponent;
  let fixture: ComponentFixture<BmiLimitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiLimitationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiLimitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
