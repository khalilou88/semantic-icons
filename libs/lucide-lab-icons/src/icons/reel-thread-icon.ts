import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-reel-thread-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 6 4.4 4.6A1.5 1.5 0 0 1 5.5 2h13a1.5 1.5 0 0 1 1.1 2.5L18 6"
    />
    <svg:rect width="12" height="12" x="6" y="6" />
    <svg:path d="m6 11 10-5" />
    <svg:path d="M22 16v-3a4 4 0 0 0-4-4L6 15" />
    <svg:path d="m8 18 10-5" />
    <svg:path
      d="m18 18 1.6 1.4a1.45 1.45 0 0 1-1.1 2.5h-13a1.5 1.5 0 0 1-1.1-2.5L6 18"
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
export class SiReelThreadIcon {
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
