import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-timer-reset-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 2h4" />
    <svg:path d="M12 14v-4" />
    <svg:path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
    <svg:path d="M9 17H4v5" />
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
export class SiTimerResetIcon {
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
