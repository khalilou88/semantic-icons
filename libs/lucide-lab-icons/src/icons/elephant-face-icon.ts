import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-elephant-face-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 10a4 4 0 0 0 4 4 2 2 0 0 1 0 4 7 7 0 0 1-2.8-.6c-.5-.2-.9 0-1 .6l-.1 1-.9.9c-.4.4-.3.9.2 1.2 1.4.6 3 .9 4.6.9 3.3 0 6-2.7 6-6V8a4 4 0 0 0-4-4h-4.6c-.7-1.2-2-2-3.4-2H6C4.3 2 3 3.3 3 5v1a7 7 0 0 0 7 7h2.4"
    />
    <svg:path d="M15.5 10H15" />
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
export class SiElephantFaceIcon {
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
