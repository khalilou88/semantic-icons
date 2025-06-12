import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hexagons-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 4.4a2 2 0 0 0-1 1.73v4.37l-4 2.4a2 2 0 0 0-1 1.73v3.27a2 2 0 0 0 .97 1.68L6 21.4a2 2 0 0 0 2.03-.02L12 19l4 2.4a2 2 0 0 0 2.03-.02L21 19.6a2 2 0 0 0 1-1.73V14.6a2 2 0 0 0-.97-1.68L17 10.5V6.1a2 2 0 0 0-.97-1.68L13 2.6a2 2 0 0 0-2.03.02Z"
    />
    <svg:path d="m7 10.5 5 3 5-3" />
    <svg:path d="M12 13.5V19" />
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
export class SiHexagons3Icon {
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
