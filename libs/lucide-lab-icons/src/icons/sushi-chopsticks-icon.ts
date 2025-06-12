import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sushi-chopsticks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M2 18V2" />
    <svg:path d="M22 18V2" />
    <svg:path
      d="M6 11c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5v6c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5Z"
    />
    <svg:path d="M18 13c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5" />
    <svg:path
      d="M11 14c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSushiChopsticksIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
