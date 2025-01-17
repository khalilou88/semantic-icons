import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-slack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="3" height="8" x="13" y="2" rx="1.5" />
    <svg:path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
    <svg:rect width="3" height="8" x="8" y="14" rx="1.5" />
    <svg:path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
    <svg:rect width="8" height="3" x="14" y="13" rx="1.5" />
    <svg:path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
    <svg:rect width="8" height="3" x="2" y="8" rx="1.5" />
    <svg:path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
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
export class SiSlackIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

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
