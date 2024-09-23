import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSectionTitleComponent } from './layout-section-title.component';

describe('LayoutSectionTitleComponent', () => {
  let component: LayoutSectionTitleComponent;
  let fixture: ComponentFixture<LayoutSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSectionTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
