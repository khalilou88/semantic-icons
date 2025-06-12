import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-house-roof-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m12 6.8 6.6 6.6a2 2 0 0 0 2.8-2.8l-8-8c-.8-.8-2-.8-2.8 0L9.2 4"
    />
    <svg:path d="m2 2 20 20" />
    <svg:path d="m6.6 6.6-4 4a2 2 0 0 0 2.8 2.8l4-4" />
    <svg:path d="M14 22v-6a2 2 0 0 0-4 0v6" />
    <svg:path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
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
export class SiHouseRoofOffIcon {
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
