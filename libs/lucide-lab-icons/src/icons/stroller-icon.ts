import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stroller-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 12.95c1.6-1.6 4.1-1.6 5.7.05" />
    <svg:circle cx="11" cy="6.5" r="2.5" />
    <svg:path d="M18.3 17.2 5.45 4.5" />
    <svg:path
      d="M19.7 17 13 18.1c-2.7.5-5.5-1-5.7-4.1-.4-2.6-.9-5.7-1.3-8.3A2 2 0 0 0 2 6"
    />
    <svg:circle cx="8" cy="19" r="2" />
    <svg:circle cx="20" cy="19" r="2" />
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
export class SiStrollerIcon {
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
