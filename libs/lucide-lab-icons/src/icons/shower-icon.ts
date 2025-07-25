import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shower-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M9 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    <svg:path d="M7 10h14" />
    <svg:path d="M3 22V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2" />
    <svg:path d="M10 14h.01" />
    <svg:path d="M14 14h.01" />
    <svg:path d="M18 14h.01" />
    <svg:path d="M9 18h.01" />
    <svg:path d="M14 18h.01" />
    <svg:path d="M19 18h.01" />
    <svg:path d="M8 22h.01" />
    <svg:path d="M14 22h.01" />
    <svg:path d="M20 22h.01" />
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
export class SiShowerIcon {
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
