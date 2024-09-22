import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InlineText3dComponent } from './inline-text3d/inline-text3d.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutMenuListItemComponent } from './layout-menu-list-item/layout-menu-list-item.component';
import { LayoutMenuListComponent } from './layout-menu-list/layout-menu-list.component';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { LayoutTitleContainerComponent } from './layout-title-container/layout-title-container.component';
import { LayoutTitleComponent } from './layout-title/layout-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InlineText3dComponent, LayoutContentComponent, LayoutMenuComponent, LayoutMenuListComponent, LayoutMenuListItemComponent, LayoutTitleContainerComponent, LayoutTitleComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
