import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-recharging-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
    <svg:path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
    <svg:path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
    <svg:path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
    <svg:path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
    <svg:path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
    <svg:path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
    <svg:path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
    <svg:path d="M12 8l-2 4h4l-2 4" />
    <svg:path d="M12 21a9 9 0 0 0 0 -18" />
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
export class SiRechargingIcon {
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
