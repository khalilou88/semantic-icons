import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-galaxy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 3c-1.333 1 -2 2.5 -2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2 -.667 3.5 -2 4.5"
    />
    <svg:path
      d="M19.794 16.5c-.2 -1.655 -1.165 -2.982 -2.897 -3.982c-2.597 -1.5 -4.897 -.518 -4.897 -.518s-2.299 .982 -4.897 -.518c-1.732 -1 -2.698 -2.327 -2.897 -3.982"
    />
    <svg:path
      d="M19.794 7.5c-1.532 -.655 -3.165 -.482 -4.897 .518c-2.597 1.5 -2.897 3.982 -2.897 3.982s-.299 2.482 -2.897 3.982c-1.732 1 -3.365 1.173 -4.897 .518"
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
export class SiGalaxyIcon {
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
