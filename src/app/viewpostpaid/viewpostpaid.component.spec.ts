import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostpaidComponent } from './viewpostpaid.component';

describe('ViewpostpaidComponent', () => {
  let component: ViewpostpaidComponent;
  let fixture: ComponentFixture<ViewpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
