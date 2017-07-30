import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireHouseComponent } from './entire-house.component';

describe('EntireHouseComponent', () => {
  let component: EntireHouseComponent;
  let fixture: ComponentFixture<EntireHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntireHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
