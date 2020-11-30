import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagefloatComponent } from './imagefloat.component';

describe('ImagefloatComponent', () => {
  let component: ImagefloatComponent;
  let fixture: ComponentFixture<ImagefloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagefloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagefloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
