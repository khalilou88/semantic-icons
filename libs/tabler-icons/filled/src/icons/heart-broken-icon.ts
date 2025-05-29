import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-heart-broken-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M11.001 3.8l-.001 1.963l-1.894 3.79l-.047 .11a1 1 0 0 0 .341 1.137l3.332 2.499l-1.626 3.254a1 1 0 0 0 -.106 .447v3.417l-7.197 -7.127a6 6 0 0 1 6.956 -9.621zm5.77 -.739l.246 .037a6 6 0 0 1 3.184 10.193l-.044 .037l-7.157 7.088v-3.181l1.894 -3.788l.047 -.11a1 1 0 0 0 -.341 -1.137l-3.333 -2.5l1.627 -3.253a1 1 0 0 0 .106 -.447v-2.187a6 6 0 0 1 3.77 -.752"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHeartBrokenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
