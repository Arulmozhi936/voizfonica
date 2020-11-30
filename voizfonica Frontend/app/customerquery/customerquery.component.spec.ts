import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerqueryComponent } from './customerquery.component';

describe('CustomerqueryComponent', () => {
  let component: CustomerqueryComponent;
  let fixture: ComponentFixture<CustomerqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
