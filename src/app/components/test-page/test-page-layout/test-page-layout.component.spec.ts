import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageLayoutComponent } from './test-page-layout.component';

describe('TestPageLayoutComponent', () => {
  let component: TestPageLayoutComponent;
  let fixture: ComponentFixture<TestPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
