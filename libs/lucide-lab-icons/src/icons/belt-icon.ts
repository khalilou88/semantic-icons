import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-belt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7.3 9H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h4.3" />
    <svg:path d="M6 6h3" />
    <svg:path d="M13 6h.01" />
    <svg:rect width="10" height="8" x="7" y="2" rx="2" />
    <svg:path d="M16.7 3H21c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4.3" />
    <svg:path d="m10.5 10-8.1 6.2" />
    <svg:path d="M21.6 8.8 12.2 16" />
    <svg:path d="M3 22c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h16l3 3-3 3Z" />
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
export class SiBeltIcon {
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
