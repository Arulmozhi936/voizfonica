import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplansComponent } from './userplans.component';

describe('UserplansComponent', () => {
  let component: UserplansComponent;
  let fixture: ComponentFixture<UserplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
