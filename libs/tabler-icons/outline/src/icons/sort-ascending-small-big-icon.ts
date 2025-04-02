import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sort-ascending-small-big-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 15l3 3l3 -3" />
    <svg:path d="M7 6v12" />
    <svg:path
      d="M14 5.667c0 -.369 .298 -.667 .667 -.667h2.666c.369 0 .667 .298 .667 .667v2.666a.667 .667 0 0 1 -.667 .667h-2.666a.667 .667 0 0 1 -.667 -.667v-2.666z"
    />
    <svg:path
      d="M14 13.167c0 -.645 .522 -1.167 1.167 -1.167h4.666c.645 0 1.167 .522 1.167 1.167v4.666c0 .645 -.522 1.167 -1.167 1.167h-4.666a1.167 1.167 0 0 1 -1.167 -1.167v-4.666z"
    />
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
export class SiSortAscendingSmallBigIcon {
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
