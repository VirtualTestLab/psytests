import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodicsComponent } from './methodics.component';

describe('MethodicsComponent', () => {
  let component: MethodicsComponent;
  let fixture: ComponentFixture<MethodicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
