import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineText3dComponent } from './inline-text3d/inline-text3d.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InlineText3dComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
