import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuListItemComponent } from './layout-menu-list-item.component';

describe('LayoutMenuListItemComponent', () => {
  let component: LayoutMenuListItemComponent;
  let fixture: ComponentFixture<LayoutMenuListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMenuListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutMenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
