import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprepaidComponent } from './addprepaid.component';

describe('AddprepaidComponent', () => {
  let component: AddprepaidComponent;
  let fixture: ComponentFixture<AddprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
