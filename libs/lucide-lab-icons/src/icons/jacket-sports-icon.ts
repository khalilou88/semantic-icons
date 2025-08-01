import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-jacket-sports-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 4c0 1.1 1.8 2 4 2s4-.9 4-2V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1Z"
    />
    <svg:path d="M8 4c0 2 4 5 4 10v8" />
    <svg:path d="M12 14c0-5 4-8 4-10" />
    <svg:path d="M6 19H3c-.6 0-1-.4-1-1V7c0-1.1.8-2.3 1.9-2.6L8 3" />
    <svg:path d="M18 9v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
    <svg:path d="m16 3 4.1 1.4C21.2 4.7 22 5.9 22 7v11c0 .6-.4 1-1 1h-3" />
    <svg:path d="M2 15h4l2-2" />
    <svg:path d="M22 15h-4l-2-2" />
    <svg:path d="M6 18h12" />
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
export class SiJacketSportsIcon {
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
