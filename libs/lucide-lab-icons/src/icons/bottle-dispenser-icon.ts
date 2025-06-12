import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bottle-dispenser-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="18.5" cy="5.5" r=".5" />
    <svg:path d="M20 10h.01" />
    <svg:path d="M9 2h7" />
    <svg:path d="M11 2v4" />
    <svg:rect width="4" height="4" x="9" y="6" rx="1" />
    <svg:path
      d="M9 10c-1.7 0-3 1.3-3 3v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7c0-1.7-1.3-3-3-3Z"
    />
    <svg:path d="M6 14.5a6 6 0 0 1 5 0s2 1.25 5 0" />
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
export class SiBottleDispenserIcon {
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
