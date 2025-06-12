import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-jar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 3h16" />
    <svg:path
      d="M5 3v1.6c0 .8-.2 1.6-.7 2.2l-.7 1C3.2 8.4 3 9.2 3 10v8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-.8-.2-1.6-.7-2.2l-.7-1c-.4-.7-.6-1.4-.6-2.2V3"
    />
    <svg:path d="M3 13h4" />
    <svg:rect width="10" height="7" x="7" y="10" rx="1" />
    <svg:path d="M17 13h4" />
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
export class SiJarIcon {
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
