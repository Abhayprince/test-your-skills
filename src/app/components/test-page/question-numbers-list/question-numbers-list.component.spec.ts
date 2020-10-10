import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNumbersListComponent } from './question-numbers-list.component';

describe('QuestionNumbersListComponent', () => {
  let component: QuestionNumbersListComponent;
  let fixture: ComponentFixture<QuestionNumbersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionNumbersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNumbersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
