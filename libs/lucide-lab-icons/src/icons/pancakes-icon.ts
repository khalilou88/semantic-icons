import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pancakes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 11.6c3.5-.8 6-2.5 6-4.6 0-2.8-4.5-5-10-5S2 4.2 2 7c0 2.5 3.7 4.6 8.4 5"
    />
    <svg:path d="M3.3 9.5C2.5 10.2 2 11.1 2 12c0 2.8 4.5 5 10 5h.3" />
    <svg:path d="M15.9 16.6c3.6-.8 6.1-2.5 6.1-4.6 0-.9-.5-1.8-1.3-2.5" />
    <svg:path
      d="M3.3 14.5C2.5 15.2 2 16.1 2 17c0 2.8 4.5 5 10 5s10-2.2 10-5c0-.9-.5-1.8-1.3-2.5"
    />
    <svg:path
      d="M16 16a2 2 0 0 1-4 0v-2c0-1.1-.9-2-2-2.2-1.8-.5-3-1.6-3-2.8 0-1.7 2.2-3 5-3s5 1.3 5 3c0 .4-.1.7-.3 1.1-.3.5-.7 1.2-.7 1.7Z"
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
export class SiPancakesIcon {
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
