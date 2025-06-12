import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bottle-spray-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 2v4" />
    <svg:path d="M6 10h4" />
    <svg:path
      d="M10 8a2 2 0 0 1 2-2h3c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H5C3.3 2 2 3.3 2 5c0 .6.4 1 1 1h1a2 2 0 0 1 2 2v2l-2.3 2.3c-.4.4-.7 1.1-.7 1.7v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6c0-.6-.3-1.3-.7-1.7L10 10Z"
    />
    <svg:path d="M14 6c0 2 0 3 2 4" />
    <svg:path d="M3 16.5a6 6 0 0 1 5 0s2 1.25 5 0" />
    <svg:path d="M22 2h.01" />
    <svg:path d="M20 5.5h.01" />
    <svg:path d="M22 9h.01" />
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
export class SiBottleSprayIcon {
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
