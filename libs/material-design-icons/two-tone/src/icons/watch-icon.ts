import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-watch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.72 4.48 14.31 2H9.7l-.41 2.47C10.13 4.17 11.05 4 12 4c.96 0 1.87.17 2.72.48zM9.29 19.53 9.7 22h4.61l.41-2.48c-.85.31-1.76.48-2.72.48-.95 0-1.87-.17-2.71-.47z"
      opacity=".3"
    />
    <svg:path
      d="M16.96 5.73 16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12s-1.19-4.81-3.04-6.27zM9.7 2h4.61l.41 2.48C13.87 4.17 12.96 4 12 4c-.95 0-1.87.17-2.71.47L9.7 2zm4.61 20H9.7l-.41-2.47c.84.3 1.76.47 2.71.47.96 0 1.87-.17 2.72-.48L14.31 22zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
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
export class SiWatchIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
