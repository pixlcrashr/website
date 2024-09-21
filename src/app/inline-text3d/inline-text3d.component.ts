import { AfterViewInit, Component, Input } from '@angular/core';
import Image from 'image-js';
import { FormsModule } from '@angular/forms';
import { combineLatest, interval, map, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';



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
    this.content$().subscribe({
      next: content => {
        this.content = content;
      }
    });
  }

  private content$(): Observable<string> {
    return combineLatest([
      fromPromise(Image.load('test.png')).pipe(
        map(img => img
          .rgba8()
        )
      ),
      interval(500)
    ]).pipe(
      map(([img, i]) => {
        const points = [
          [0, 0],
          [img.width, 0],
          [img.width, img.height],
          [0, img.height]
        ];
        console.log(points);

        const pixels = img
          .warpingFourPoints(points)
          .grey({
            keepAlpha: true
          })
          .resize({
            width: this.charWidth,
            height: this.charHeight
          })
          .getPixelsArray();

        let contentHtml = '';
        pixels.forEach((
          p,
          i
        ) => {
          const randChar = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
          const percentage = p[0] / 255;
          contentHtml += percentage === 0 ?
            ' ' :
            randChar;

          if (((i + 1) % this.charWidth) === 0) {
            contentHtml += '<br />';
          }
        });
        return contentHtml;
      })
    );
  }
}
