import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiContainerMeaningComponent } from './bmi-container-meaning.component';

describe('BmiContainerMeaningComponent', () => {
  let component: BmiContainerMeaningComponent;
  let fixture: ComponentFixture<BmiContainerMeaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiContainerMeaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiContainerMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
