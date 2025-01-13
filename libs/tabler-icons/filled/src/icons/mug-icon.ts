import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mug-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3.903 4.008l.183 -.008h10.828a2.08 2.08 0 0 1 2.086 2.077v.923h1.5c1.917 0 3.5 1.477 3.5 3.333v2.334c0 1.856 -1.583 3.333 -3.5 3.333h-1.663a5.33 5.33 0 0 1 -5.17 4h-4.334c-2.944 0 -5.333 -2.375 -5.333 -5.308v-8.618a2.08 2.08 0 0 1 1.903 -2.066m13.097 9.992h1.5c.843 0 1.5 -.613 1.5 -1.333v-2.334c0 -.72 -.657 -1.333 -1.5 -1.333h-1.5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMugIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
