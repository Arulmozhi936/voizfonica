import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpostpaidComponent } from './editpostpaid.component';

describe('EditpostpaidComponent', () => {
  let component: EditpostpaidComponent;
  let fixture: ComponentFixture<EditpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
