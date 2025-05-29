import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-replace-all-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="M14 4a2 2 0 0 1 2-2" />
    <svg:path d="M16 10a2 2 0 0 1-2-2" />
    <svg:path d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
    <svg:path d="M20 2a2 2 0 0 1 2 2" />
    <svg:path d="M22 8a2 2 0 0 1-2 2" />
    <svg:path d="m3 7 3 3 3-3" />
    <svg:path d="M6 10V5a 3 3 0 0 1 3-3h1" />
    <svg:rect x="2" y="14" width="8" height="8" rx="2" />
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
export class SiReplaceAllIcon {
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
