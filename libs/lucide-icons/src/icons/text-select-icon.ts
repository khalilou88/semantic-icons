import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-text-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 21h1" />
    <svg:path d="M14 3h1" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M21 14v1" />
    <svg:path d="M21 19a2 2 0 0 1-2 2" />
    <svg:path d="M21 9v1" />
    <svg:path d="M3 14v1" />
    <svg:path d="M3 9v1" />
    <svg:path d="M5 21a2 2 0 0 1-2-2" />
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M7 12h10" />
    <svg:path d="M7 16h6" />
    <svg:path d="M7 8h8" />
    <svg:path d="M9 21h1" />
    <svg:path d="M9 3h1" />
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
export class SiTextSelectIcon {
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
