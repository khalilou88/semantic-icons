import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-backpack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 15.17V8c0-1.1-.9-2-2-2H8.83l6 6h1.67v1.67l1.5 1.5zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20h11.17z"
      opacity=".3"
    />
    <svg:path
      d="M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83L6.98 4.15zM14.83 12l1.67 1.67V12h-1.67zm4.95 10.61-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20h11.17z"
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
export class SiNoBackpackIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
