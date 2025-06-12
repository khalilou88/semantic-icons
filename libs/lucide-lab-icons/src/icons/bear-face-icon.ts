import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bear-face-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m6 7 .5.5" />
    <svg:path d="m18 7-.5.5" />
    <svg:path
      d="M20.8 4.2c-1.6-1.6-4.1-1.6-5.7 0l-1 1a13.6 13.6 0 0 0-4.2 0l-1-1a4 4 0 0 0-5.8 5.55A7 7 0 0 0 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5a7 7 0 0 0-1.1-3.8c1.5-1.6 1.5-4-.1-5.5"
    />
    <svg:path d="M10 12v-.5" />
    <svg:path d="M14 12v-.5" />
    <svg:path d="M14 16h-4" />
    <svg:path d="M12 16v2" />
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
export class SiBearFaceIcon {
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
