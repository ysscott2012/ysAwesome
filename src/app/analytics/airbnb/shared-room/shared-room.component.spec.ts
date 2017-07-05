import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRoomComponent } from './shared-room.component';

describe('SharedRoomComponent', () => {
  let component: SharedRoomComponent;
  let fixture: ComponentFixture<SharedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
