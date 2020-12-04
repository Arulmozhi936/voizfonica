import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprepaidComponent } from './viewprepaid.component';

describe('ViewprepaidComponent', () => {
  let component: ViewprepaidComponent;
  let fixture: ComponentFixture<ViewprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
