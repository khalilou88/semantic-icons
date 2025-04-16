import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-marquee-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" />
    <svg:path d="M9 4h1.5" />
    <svg:path d="M13.5 4h1.5" />
    <svg:path d="M18 4a2 2 0 0 1 2 2" />
    <svg:path d="M20 9v1.5" />
    <svg:path d="M20 13.5v1.5" />
    <svg:path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" />
    <svg:path d="M15 20h-1.5" />
    <svg:path d="M10.5 20h-1.5" />
    <svg:path d="M6 20a2 2 0 0 1 -2 -2" />
    <svg:path d="M4 15v-1.5" />
    <svg:path d="M4 10.5v-1.5" />
    <svg:path d="M3 3l18 18" />
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
export class SiMarqueeOffIcon {
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
