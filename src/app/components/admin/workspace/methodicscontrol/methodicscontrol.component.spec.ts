import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodicscontrolComponent } from './methodicscontrol.component';

describe('MethodicscontrolComponent', () => {
  let component: MethodicscontrolComponent;
  let fixture: ComponentFixture<MethodicscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodicscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodicscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
