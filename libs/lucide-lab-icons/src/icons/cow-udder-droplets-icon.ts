import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cow-udder-droplets-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 2c0 2 .6 4 1.7 5.5L2.3 10a2 2 0 0 0 3.4 2l.9-1.6c1 .6 2.1 1.1 3.4 1.4V14a2 2 0 0 0 4 0v-2.2a8.5 8.5 0 0 0 3.4-1.4l.9 1.6a1.94 1.94 0 1 0 3.4-2l-1.4-2.5C21.4 6 22 4 22 2Z"
    />
    <svg:path
      d="M7.9 18.6c-.6-.6-1.1-1.3-1.4-2.1-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0"
    />
    <svg:path
      d="M18.9 18.6c-.6-.6-1.1-1.3-1.4-2.1-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0"
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
export class SiCowUdderDropletsIcon {
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
