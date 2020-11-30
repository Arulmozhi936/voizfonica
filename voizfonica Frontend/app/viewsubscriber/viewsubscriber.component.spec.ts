import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubscriberComponent } from './viewsubscriber.component';

describe('ViewsubscriberComponent', () => {
  let component: ViewsubscriberComponent;
  let fixture: ComponentFixture<ViewsubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
