import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprepaidComponent } from './editprepaid.component';

describe('EditprepaidComponent', () => {
  let component: EditprepaidComponent;
  let fixture: ComponentFixture<EditprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
