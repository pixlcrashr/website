import { AfterViewInit, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { base64ToContentMatrix, contentMatrixToContentHtml } from '../../lib/char-animations';
import { ANIMATION } from '../../lib/char-animations/apple';
import { Animation } from '../../lib/char-animations';



@Component({
  selector: 'app-inline-text3d',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './inline-text3d.component.html',
  styleUrl: './inline-text3d.component.scss'
})
export class InlineText3dComponent implements AfterViewInit {
  @Input()
  public charWidth = 50;

  @Input()
  public charHeight = 20;

  @Input()
  public chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz!"#$%&()*+,-./0123456789[]@=?;:_~}|{öäüÖÄÜ+=';

  @Input()
  public content = '';

  public ngAfterViewInit(): void {
    const anim = ANIMATION;

    this.setContent(anim, 0);

    interval(300).subscribe({
      next: x => {
        const i = x % anim.frames.length;
        this.setContent(
          anim,
          i
        );
      }
    })
  }

  public setContent(anim: Animation, i: number): void {
    const frame = anim.frames[i];
    const matrix = base64ToContentMatrix(frame);
    this.content = contentMatrixToContentHtml(
      anim.width,
      matrix
    );
  }
}
