import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowl-overflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4C6.5 4 2 6.2 2 9c0 2.4 3.4 4.4 8 4.9 1.1.1 2 1 2 2.1v3a2 2 0 0 0 4 0v-3.4c0-1.1.9-2.2 1.9-2.6 2.5-.9 4.1-2.4 4.1-4 0-2.8-4.5-5-10-5"
    />
    <svg:path d="M2 9c0 5.5 4.5 10 10 10" />
    <svg:path d="M16 18.2c3.5-1.5 6-5.1 6-9.2" />
    <svg:path
      d="M16 15.6c0-2.6 3-2.6 3-4.6 0-1.7-3.1-3-7-3s-7 1.3-7 3c0 1.4 2.1 2.5 5 2.9"
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
export class SiBowlOverflowIcon {
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
