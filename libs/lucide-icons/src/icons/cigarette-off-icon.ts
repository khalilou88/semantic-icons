import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cigarette-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
    <svg:path d="M18 8c0-2.5-2-2.5-2-5" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
    <svg:path d="M22 8c0-2.5-2-2.5-2-5" />
    <svg:path d="M7 12v4" />
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
export class SiCigaretteOffIcon {
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
