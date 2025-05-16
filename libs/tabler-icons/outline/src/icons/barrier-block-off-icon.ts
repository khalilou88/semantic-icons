import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-barrier-block-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M11 7h8a1 1 0 0 1 1 1v7c0 .27 -.107 .516 -.282 .696" />
    <svg:path d="M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2" />
    <svg:path d="M7 16v4" />
    <svg:path d="M7.5 16l4.244 -4.244" />
    <svg:path d="M13.745 9.755l2.755 -2.755" />
    <svg:path d="M13.5 16l1.249 -1.249" />
    <svg:path d="M16.741 12.759l3.259 -3.259" />
    <svg:path d="M4 13.5l4.752 -4.752" />
    <svg:path d="M17 17v3" />
    <svg:path d="M5 20h4" />
    <svg:path d="M15 20h4" />
    <svg:path d="M17 7v-2" />
    <svg:path d="M3 3l18 18" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBarrierBlockOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

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
