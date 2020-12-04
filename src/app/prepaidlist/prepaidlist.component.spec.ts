import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidlistComponent } from './prepaidlist.component';

describe('PrepaidlistComponent', () => {
  let component: PrepaidlistComponent;
  let fixture: ComponentFixture<PrepaidlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
