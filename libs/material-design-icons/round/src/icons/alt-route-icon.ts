import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-alt-route-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m9.78 11.16-1.42 1.42a7.282 7.282 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zm.37-6.01-2.8-2.8c-.2-.2-.51-.2-.71 0l-2.79 2.8a.5.5 0 0 0 .36.85h1.81c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H9.8a.5.5 0 0 0 .35-.85zm10 0-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79c-.32.31-.1.85.35.85h1.78c-.1 3.68-1.28 4.75-2.54 5.88-.5.44-1.01.92-1.45 1.55-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-2.02.71-2.66 1.79-3.63 1.38-1.24 3.08-2.78 3.2-7.37h1.8a.5.5 0 0 0 .36-.85z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAltRouteIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
