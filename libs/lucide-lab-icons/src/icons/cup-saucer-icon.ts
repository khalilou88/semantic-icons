import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cup-saucer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M2 18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
    <svg:path d="M6 8h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
    <svg:path d="M18 8h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1" />
    <svg:path d="M6 4a1 1 0 0 1 1-1 1 1 0 0 0 1-1" />
    <svg:path d="M12 4a1 1 0 0 1 1-1 1 1 0 0 0 1-1" />
    <svg:path d="M18 4a1 1 0 0 1 1-1 1 1 0 0 0 1-1" />
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
export class SiCupSaucerIcon {
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
