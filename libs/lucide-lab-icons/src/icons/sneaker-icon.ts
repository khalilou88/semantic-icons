import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sneaker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14.1 7.9 12.5 10" />
    <svg:path d="M17.4 10.1 16 12" />
    <svg:path
      d="M2 16a2 2 0 0 0 2 2h13c2.8 0 5-2.2 5-5a2 2 0 0 0-2-2c-.8 0-1.6-.2-2.2-.7l-6.2-4.2c-.4-.3-.9-.2-1.3.1 0 0-.6.8-1.2 1.1a3.5 3.5 0 0 1-4.2.1C4.4 7 3.7 6.3 3.7 6.3A.92.92 0 0 0 2 7Z"
    />
    <svg:path d="M2 11c0 1.7 1.3 3 3 3h7" />
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
export class SiSneakerIcon {
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
