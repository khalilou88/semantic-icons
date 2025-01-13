import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-backhoe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M13 19l-9 0" />
    <svg:path d="M4 15l9 0" />
    <svg:path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
    <svg:path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
    <svg:path d="M21.12 9.88l-3.12 -4.88l-5 5" />
    <svg:path
      d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
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
export class SiBackhoeIcon {
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
