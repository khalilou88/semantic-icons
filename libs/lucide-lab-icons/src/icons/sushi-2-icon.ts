import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sushi-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.4 3.3a8.23 8.23 0 0 0-8.8 0L3.8 6c-2.4 1.7-2.4 4.4 0 6.1l3.9 2.7c2.4 1.7 6.3 1.7 8.7 0l3.9-2.7c2.4-1.7 2.4-4.4 0-6.1Z"
    />
    <svg:path
      d="M2 9v6c0 1.1.6 2.2 1.8 3l3.9 2.7c2.4 1.7 6.3 1.7 8.7 0l3.9-2.7c1.2-.8 1.8-1.9 1.8-3V9"
    />
    <svg:path
      d="M7.7 10.1c-.9-.6-.9-1.6 0-2.2l2.7-1.8c.9-.6 2.4-.6 3.3 0l2.7 1.8c.9.6.9 1.6 0 2.2l-2.7 1.8c-.9.6-2.4.6-3.3 0Z"
    />
    <svg:path d="M15 11c-2-3-5-2-6 0" />
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
export class SiSushi2Icon {
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
