import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vector-square-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M19.5 7a24 24 0 0 1 0 10" />
    <svg:path d="M4.5 7a24 24 0 0 0 0 10" />
    <svg:path d="M7 19.5a24 24 0 0 0 10 0" />
    <svg:path d="M7 4.5a24 24 0 0 1 10 0" />
    <svg:rect x="17" y="17" width="5" height="5" rx="1" />
    <svg:rect x="17" y="2" width="5" height="5" rx="1" />
    <svg:rect x="2" y="17" width="5" height="5" rx="1" />
    <svg:rect x="2" y="2" width="5" height="5" rx="1" />
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
export class SiVectorSquareIcon {
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
