import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dashed-letter-n-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 16v-8l4 8v-8" />
    <svg:path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
    <svg:path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
    <svg:path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <svg:path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
    <svg:path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
    <svg:path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
    <svg:path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
    <svg:path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
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
export class SiCircleDashedLetterNIcon {
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
