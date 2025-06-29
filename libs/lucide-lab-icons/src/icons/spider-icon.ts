import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-spider-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 5v1" />
    <svg:path d="M14 6V5" />
    <svg:path d="M10 10.4V8a2 2 0 1 1 4 0v2.4" />
    <svg:path d="M7 15H4l-2 2.5" />
    <svg:path d="M7.42 17 5 20l1 2" />
    <svg:path d="m8 12-4-1-2-3" />
    <svg:path d="M9 11 5.5 6 7 2" />
    <svg:path d="M8 18a5 5 0 1 1 8 0s-2 3-4 4c-2-1-4-4-4-4" />
    <svg:path d="m15 11 3.5-5L17 2" />
    <svg:path d="m16 12 4-1 2-3" />
    <svg:path d="M17 15h3l2 2.5" />
    <svg:path d="M16.57 17 19 20l-1 2" />
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
export class SiSpiderIcon {
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
