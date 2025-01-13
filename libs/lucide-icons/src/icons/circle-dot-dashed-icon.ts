import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dot-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
    <svg:path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
    <svg:path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
    <svg:path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
    <svg:path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
    <svg:path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
    <svg:path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
    <svg:path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
    <svg:circle cx="12" cy="12" r="1" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCircleDotDashedIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

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
