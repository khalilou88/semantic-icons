import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microwave-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10"
    />
    <svg:path d="M15 6v5m0 4v3" />
    <svg:path d="M18 12h.01" />
    <svg:path d="M18 9h.01" />
    <svg:path
      d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.636 .265 1.272 .665 1.907 .428"
    />
    <svg:path
      d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0"
    />
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
export class SiMicrowaveOffIcon {
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
