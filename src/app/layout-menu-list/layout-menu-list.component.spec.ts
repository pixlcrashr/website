import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuListComponent } from './layout-menu-list.component';

describe('LayoutMenuListComponent', () => {
  let component: LayoutMenuListComponent;
  let fixture: ComponentFixture<LayoutMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMenuListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
