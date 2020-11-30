import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdongleComponent } from './viewdongle.component';

describe('ViewdongleComponent', () => {
  let component: ViewdongleComponent;
  let fixture: ComponentFixture<ViewdongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
