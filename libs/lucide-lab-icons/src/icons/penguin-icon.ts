import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-penguin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.9 15a5.87 5.87 0 0 0-1.7-3.3l-.2-.2c-.6-.6-1-1.5-1-2.5V5a3 3 0 1 0-6 0v4a3.74 3.74 0 0 1-1.2 2.8 6.2 6.2 0 0 0-1.7 3.3"
    />
    <svg:path d="M9 10c-2 4-4-1-7 2" />
    <svg:path d="M9 8.9c3-1.9 6 0 6 0s-2 3.1-3 4c-1-.9-3-4-3-4" />
    <svg:path d="M15 10c2 4 4-1 7 2" />
    <svg:path
      d="M2 19c0-1 1-1 1-2 0-.6.4-1 1-1 1 0 1-1 2-1 .4 0 .7.2.9.5L8.8 19a2 2 0 0 1-2.7 2.7l-3.5-1.9c-.4-.1-.6-.4-.6-.8"
    />
    <svg:path d="M8.7 21a6.07 6.07 0 0 0 6.6 0" />
    <svg:path
      d="M22 19c0-1-1-1-1-2 0-.6-.4-1-1-1-1 0-1-1-2-1-.4 0-.7.2-.9.5L15.2 19a2 2 0 0 0 2.7 2.7l3.5-1.9c.4-.1.6-.4.6-.8"
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
export class SiPenguinIcon {
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
