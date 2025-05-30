import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-broadcast-on-home-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 6c0-1.1-.9-2-2-2H5c-.55 0-1 .45-1 1s.45 1 1 1h15v2.59c.73.29 1.4.69 2 1.17V6zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97a1.25 1.25 0 0 0-2.5 0c0 .4.2.75.5.97v4.28c0 .41.34.75.75.75s.75-.34.75-.75v-4.28z"
    />
    <svg:path
      d="M17.54 13.56c.98.21 1.76 1.03 1.93 2.02.11.64-.03 1.25-.34 1.74a.73.73 0 0 0 .12.91c.34.33.9.29 1.16-.12.51-.82.73-1.83.53-2.9-.3-1.56-1.56-2.83-3.12-3.13A4.009 4.009 0 0 0 13 16c0 .78.22 1.5.6 2.11.25.41.83.46 1.16.12.24-.24.29-.63.11-.92A2.44 2.44 0 0 1 14.5 16c0-1.55 1.43-2.78 3.04-2.44z"
    />
    <svg:path
      d="M16.25 9.54c-2.94.33-5.32 2.68-5.69 5.61-.23 1.82.29 3.51 1.3 4.82.27.35.8.37 1.12.06.27-.27.28-.7.05-1a4.99 4.99 0 0 1-.95-3.89 4.993 4.993 0 0 1 3.98-4.05C19.22 10.5 22 12.93 22 16c0 1.13-.38 2.18-1.02 3.02-.23.3-.21.73.06 1 .31.31.84.3 1.11-.06A6.423 6.423 0 0 0 23.5 16c0-3.84-3.33-6.9-7.25-6.46z"
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
export class SiBroadcastOnHomeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
