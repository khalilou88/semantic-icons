import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-snowflake-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 4l2 1l2 -1" />
    <svg:path d="M12 2v6m1.196 1.186l1.804 1.034" />
    <svg:path d="M17.928 6.268l.134 2.232l1.866 1.232" />
    <svg:path d="M20.66 7l-5.629 3.25l-.031 .75" />
    <svg:path d="M19.928 14.268l-1.015 .67" />
    <svg:path d="M14.212 14.226l-2.171 1.262" />
    <svg:path d="M14 20l-2 -1l-2 1" />
    <svg:path d="M12 22v-6.5l-3 -1.72" />
    <svg:path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
    <svg:path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
    <svg:path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
    <svg:path d="M3.34 7l5.629 3.25l.802 -.466" />
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
export class SiSnowflakeOffIcon {
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
