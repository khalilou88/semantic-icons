import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-frog-face-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6 7h.01" />
    <svg:circle cx="6" cy="7" r="4" />
    <svg:path d="M14.4 5.3a10 10 0 0 0-4.8 0" />
    <svg:circle cx="18" cy="7" r="4" />
    <svg:path d="M18 7h.01" />
    <svg:path d="M22 13.5C22 16 17.5 18 12 18S2 16 2 13.5" />
    <svg:path d="M10 14h.01" />
    <svg:path d="M14 14h.01" />
    <svg:path
      d="M3.1 9.75A7 7 0 0 0 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5a7 7 0 0 0-1.1-3.75"
    />
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
export class SiFrogFaceIcon {
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
