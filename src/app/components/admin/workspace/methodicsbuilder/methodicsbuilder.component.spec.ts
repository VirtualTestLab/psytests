import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodicsbuilderComponent } from './methodicsbuilder.component';

describe('MethodicsbuilderComponent', () => {
  let component: MethodicsbuilderComponent;
  let fixture: ComponentFixture<MethodicsbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodicsbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodicsbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
