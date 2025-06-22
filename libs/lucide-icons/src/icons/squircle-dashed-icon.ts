import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-squircle-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13.77 3.043a34 34 0 0 0-3.54 0" />
    <svg:path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
    <svg:path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
    <svg:path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
    <svg:path d="M20.957 10.23a33 33 0 0 1 0 3.54" />
    <svg:path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
    <svg:path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
    <svg:path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
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
export class SiSquircleDashedIcon {
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
