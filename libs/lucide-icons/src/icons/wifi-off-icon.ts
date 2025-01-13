import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20h.01" />
    <svg:path d="M8.5 16.429a5 5 0 0 1 7 0" />
    <svg:path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
    <svg:path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
    <svg:path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
    <svg:path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
    <svg:path d="m2 2 20 20" />
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
export class SiWifiOffIcon {
  readonly xmlns = input('http://www.w3.org/2000/svg');

  readonly width = input('24');

  readonly height = input('24');

  readonly viewBox = input('0 0 24 24');

  readonly fill = input('none');

  readonly stroke = input('currentColor');

  readonly strokeWidth = input<string>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
