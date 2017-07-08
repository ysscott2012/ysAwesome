import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsSideMenuComponent } from './analytics-side-menu.component';

describe('AnalyticsSideMenuComponent', () => {
  let component: AnalyticsSideMenuComponent;
  let fixture: ComponentFixture<AnalyticsSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
