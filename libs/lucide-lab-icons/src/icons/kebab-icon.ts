import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kebab-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m12 12 4.2-4.2c.4-.4.4-1 .1-1.5a2.9 2.9 0 1 1 4.8.8" />
    <svg:path
      d="M15.3 11.3c.9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0 .9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0l-2.6-2.6c-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0Z"
    />
    <svg:path d="m10.3 16.3-2.6-2.6" />
    <svg:path d="m9 15-2 2" />
    <svg:path d="m2 22 2-2" />
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
export class SiKebabIcon {
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
