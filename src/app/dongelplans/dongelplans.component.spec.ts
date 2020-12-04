import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongelplansComponent } from './dongelplans.component';

describe('DongelplansComponent', () => {
  let component: DongelplansComponent;
  let fixture: ComponentFixture<DongelplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongelplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DongelplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
