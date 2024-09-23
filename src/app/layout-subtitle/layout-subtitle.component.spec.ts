import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSubtitleComponent } from './layout-subtitle.component';

describe('LayoutSubtitleComponent', () => {
  let component: LayoutSubtitleComponent;
  let fixture: ComponentFixture<LayoutSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSubtitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
