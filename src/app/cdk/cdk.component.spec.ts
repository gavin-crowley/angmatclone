import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDKComponent } from './cdk.component';

describe('CDKComponent', () => {
  let component: CDKComponent;
  let fixture: ComponentFixture<CDKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
