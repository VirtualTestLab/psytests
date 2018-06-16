import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermonitoringComponent } from './usermonitoring.component';

describe('UsermonitoringComponent', () => {
  let component: UsermonitoringComponent;
  let fixture: ComponentFixture<UsermonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
