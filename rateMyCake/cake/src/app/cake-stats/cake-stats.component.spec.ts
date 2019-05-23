import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeStatsComponent } from './cake-stats.component';

describe('CakeStatsComponent', () => {
  let component: CakeStatsComponent;
  let fixture: ComponentFixture<CakeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
