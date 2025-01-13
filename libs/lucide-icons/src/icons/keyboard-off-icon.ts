import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-keyboard-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M 20 4 A2 2 0 0 1 22 6" />
    <svg:path d="M 22 6 L 22 16.41" />
    <svg:path d="M 7 16 L 16 16" />
    <svg:path d="M 9.69 4 L 20 4" />
    <svg:path d="M14 8h.01" />
    <svg:path d="M18 8h.01" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
    <svg:path d="M6 8h.01" />
    <svg:path d="M8 12h.01" />
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
export class SiKeyboardOffIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
