import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdongleComponent } from './editdongle.component';

describe('EditdongleComponent', () => {
  let component: EditdongleComponent;
  let fixture: ComponentFixture<EditdongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
