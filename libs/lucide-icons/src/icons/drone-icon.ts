import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-drone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 10 7 7" />
    <svg:path d="m10 14-3 3" />
    <svg:path d="m14 10 3-3" />
    <svg:path d="m14 14 3 3" />
    <svg:path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
    <svg:path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
    <svg:path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
    <svg:path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
    <svg:rect x="10" y="8" width="4" height="8" rx="1" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDroneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

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
