import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubscriberComponent } from './addsubscriber.component';

describe('AddsubscriberComponent', () => {
  let component: AddsubscriberComponent;
  let fixture: ComponentFixture<AddsubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
