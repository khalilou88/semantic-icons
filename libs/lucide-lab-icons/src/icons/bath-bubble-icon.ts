import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bath-bubble-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 3h.01" />
    <svg:circle cx="11.5" cy="6.5" r=".5" />
    <svg:circle cx="16.5" cy="7.5" r=".5" />
    <svg:path d="M2 12h6" />
    <svg:path d="M13 15H8v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1Z" />
    <svg:path d="M13 12h9" />
    <svg:path d="M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    <svg:path d="M7 19v2" />
    <svg:path d="M17 19v2" />
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
export class SiBathBubbleIcon {
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
