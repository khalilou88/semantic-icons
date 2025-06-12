import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cat-big-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m6 7 .5.5" />
    <svg:path d="m18 7-.5.5" />
    <svg:path
      d="M5 13a5 5 0 1 0 6.8 7.2l3-3.6A1 1 0 0 0 14 15h-4a1 1 0 0 0-.8 1.6l3 3.6A5 5 0 1 0 19 13h3c0-1.2-.4-2.4-1-3.4a3 3 0 0 0-5.8-5.3l-1 1a7 4 0 0 0-4.4 0l-1-1A3 3 0 0 0 3 9.6c-.6 1-1 2.2-1 3.4Z"
    />
    <svg:path d="M10 11v-.5" />
    <svg:path d="M14 11v-.5" />
    <svg:path d="M5 18H2" />
    <svg:path d="M19 18h3" />
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
export class SiCatBigIcon {
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
