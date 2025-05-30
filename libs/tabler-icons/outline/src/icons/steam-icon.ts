import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-steam-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M5.5 5.5l3 3" />
    <svg:path d="M15.5 15.5l3 3" />
    <svg:path d="M18.5 5.5l-3 3" />
    <svg:path d="M8.5 15.5l-3 3" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
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
export class SiSteamIcon {
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
