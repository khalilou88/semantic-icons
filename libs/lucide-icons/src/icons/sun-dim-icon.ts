import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sun-dim-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="4" />
    <svg:path d="M12 4h.01" />
    <svg:path d="M20 12h.01" />
    <svg:path d="M12 20h.01" />
    <svg:path d="M4 12h.01" />
    <svg:path d="M17.657 6.343h.01" />
    <svg:path d="M17.657 17.657h.01" />
    <svg:path d="M6.343 17.657h.01" />
    <svg:path d="M6.343 6.343h.01" />
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
export class SiSunDimIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
