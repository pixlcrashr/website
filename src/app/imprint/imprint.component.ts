import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutMenuComponent } from '../layout-menu/layout-menu.component';
import { LayoutTitleContainerComponent } from '../layout-title-container/layout-title-container.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    LayoutContentComponent,
    LayoutMenuComponent,
    LayoutTitleContainerComponent,
    LayoutTitleComponent,
    RouterLink
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
