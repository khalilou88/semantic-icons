import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bug-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m8 2 1.88 1.88" />
    <svg:path d="M14.12 3.88 16 2" />
    <svg:path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <svg:path
      d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
    />
    <svg:path d="M12 20v-9" />
    <svg:path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <svg:path d="M6 13H2" />
    <svg:path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <svg:path d="M22 13h-4" />
    <svg:path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
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
export class SiBugIcon {
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
