import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-butterfly-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17.117 6.244l.228 .076a5.5 5.5 0 0 1 1.24 9.738l-.063 .039l.02 .034a4 4 0 0 1 .101 3.533l-.093 .19a4 4 0 0 1 -5.55 1.608v-14.857a5.5 5.5 0 0 1 4.118 -.36"
    />
    <svg:path
      d="M8.505 6c.885 0 1.736 .21 2.495 .597v14.87a4 4 0 0 1 -1.012 .41l-.196 .045a4 4 0 0 1 -4.424 -5.587l.118 -.238l-.035 -.023a5.5 5.5 0 0 1 -2.397 -5.258l.034 -.233a5.5 5.5 0 0 1 5.417 -4.583"
    />
    <svg:path
      d="M14.445 2.168a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1 -1.11 0l-3 -2a1 1 0 0 1 1.11 -1.664l2.444 1.63z"
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
export class SiButterflyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
