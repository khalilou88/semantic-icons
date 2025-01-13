import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-megaphone-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M9.26 9.26 3 11v3l14.14 3.14" />
    <svg:path d="M21 15.34V6l-7.31 2.03" />
    <svg:path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <svg:line x1="2" x2="22" y1="2" y2="22" />
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
export class SiMegaphoneOffIcon {
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
