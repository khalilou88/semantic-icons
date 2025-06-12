import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tie-bow-ribbon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="4" height="4" x="10" y="7" />
    <svg:path d="M8 9h2" />
    <svg:path
      d="M10 7C8.8 5.5 6.6 4 4 4 2.9 4 2 6.2 2 9s.9 5 2 5c2.6 0 4.8-1.5 6-3"
    />
    <svg:path d="M14 9h2" />
    <svg:path
      d="M14 11c1.2 1.5 3.4 3 6 3 1.1 0 2-2.2 2-5s-.9-5-2-5c-2.6 0-4.8 1.5-6 3"
    />
    <svg:path d="M5.5 13.83 4 20l3-1 2 2 2.5-10" />
    <svg:path d="M18.5 13.83 20 20l-3-1-2 2-2.5-10" />
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
export class SiTieBowRibbonIcon {
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
