import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiRecommendationComponent } from './bmi-recommendation.component';

describe('BmiRecommendationComponent', () => {
  let component: BmiRecommendationComponent;
  let fixture: ComponentFixture<BmiRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
