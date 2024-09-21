import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineText3dComponent } from './inline-text3d.component';

describe('InlineText3dComponent', () => {
  let component: InlineText3dComponent;
  let fixture: ComponentFixture<InlineText3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineText3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineText3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
