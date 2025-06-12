import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-crab-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7.5 14A6 6 0 1 1 10 2.36L8 5l2 2S7 8 2 8" />
    <svg:path d="M16.5 14A6 6 0 1 0 14 2.36L16 5l-2 2s3 1 8 1" />
    <svg:path d="M10 13v-2" />
    <svg:path d="M14 13v-2" />
    <svg:ellipse cx="12" cy="17.5" rx="7" ry="4.5" />
    <svg:path d="M2 16c2 0 3 1 3 1" />
    <svg:path d="M2 22c0-1.7 1.3-3 3-3" />
    <svg:path d="M19 17s1-1 3-1" />
    <svg:path d="M19 19c1.7 0 3 1.3 3 3" />
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
export class SiCrabIcon {
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
