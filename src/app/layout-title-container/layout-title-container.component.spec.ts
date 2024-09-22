import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTitleContainerComponent } from './layout-title-container.component';

describe('LayoutTitleContainerComponent', () => {
  let component: LayoutTitleContainerComponent;
  let fixture: ComponentFixture<LayoutTitleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTitleContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutTitleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
