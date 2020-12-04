import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberlistComponent } from './subscriberlist.component';

describe('SubscriberlistComponent', () => {
  let component: SubscriberlistComponent;
  let fixture: ComponentFixture<SubscriberlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
