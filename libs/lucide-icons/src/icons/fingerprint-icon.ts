import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fingerprint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
    <svg:path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
    <svg:path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
    <svg:path d="M2 12a10 10 0 0 1 18-6" />
    <svg:path d="M2 16h.01" />
    <svg:path d="M21.8 16c.2-2 .131-5.354 0-6" />
    <svg:path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
    <svg:path d="M8.65 22c.21-.66.45-1.32.57-2" />
    <svg:path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
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
export class SiFingerprintIcon {
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
