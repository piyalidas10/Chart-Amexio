import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickchartComponent } from './candlestickchart.component';

describe('CandlestickchartComponent', () => {
  let component: CandlestickchartComponent;
  let fixture: ComponentFixture<CandlestickchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandlestickchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
