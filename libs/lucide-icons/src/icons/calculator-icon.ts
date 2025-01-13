import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calculator-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" />
    <svg:line x1="8" x2="16" y1="6" y2="6" />
    <svg:line x1="16" x2="16" y1="14" y2="18" />
    <svg:path d="M16 10h.01" />
    <svg:path d="M12 10h.01" />
    <svg:path d="M8 10h.01" />
    <svg:path d="M12 14h.01" />
    <svg:path d="M8 14h.01" />
    <svg:path d="M12 18h.01" />
    <svg:path d="M8 18h.01" />
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
export class SiCalculatorIcon {
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
