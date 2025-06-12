import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hairdryer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="8" cy="8" r="2" />
    <svg:path d="M18 11s-7 3-10 3A6 6 0 0 1 8 2c3 0 10 3 10 3Z" />
    <svg:path d="m18 5 4-2v10l-4-2" />
    <svg:path d="m7 13.9.8 5.1c.1.5.6 1 1.2 1h2c.6 0 .9-.4.8-1l-.9-5.5" />
    <svg:path d="M11.64 18s3.3-2 7.3-2a2 2 0 0 1 0 4H17a2 2 0 0 0-2 2" />
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
export class SiHairdryerIcon {
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
