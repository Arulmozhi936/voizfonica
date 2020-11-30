import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubscriberComponent } from './editsubscriber.component';

describe('EditsubscriberComponent', () => {
  let component: EditsubscriberComponent;
  let fixture: ComponentFixture<EditsubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
