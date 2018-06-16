import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMethodicsComponent } from './startmethodics.component';

describe('StartMethodicsComponent', () => {
  let component: StartMethodicsComponent;
  let fixture: ComponentFixture<StartMethodicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMethodicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMethodicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
