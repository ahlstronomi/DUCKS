import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDucksComponent } from './report-ducks.component';

describe('ReportDucksComponent', () => {
  let component: ReportDucksComponent;
  let fixture: ComponentFixture<ReportDucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
