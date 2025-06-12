import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-football-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 3c-.8-.8-3-1.2-5.8-.9s-6 1.6-8.8 4.4-4 6-4.4 8.8.1 5 .9 5.8 3 1.2 5.8.9 6-1.6 8.8-4.4 4-6 4.4-8.8-.1-5-.9-5.8"
    />
    <svg:path d="M6.4 17.6 9 15" />
    <svg:path d="M8.7 21.9c-.8-3.3-3.4-5.8-6.7-6.7" />
    <svg:path d="m8.1 13.9 2 2" />
    <svg:path d="m11 11 2 2" />
    <svg:path d="m13.9 8.1 2 2" />
    <svg:path d="M15.3 2.1c.8 3.3 3.4 5.8 6.6 6.6" />
    <svg:path d="m15 9 2.6-2.6" />
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
export class SiFootballIcon {
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
