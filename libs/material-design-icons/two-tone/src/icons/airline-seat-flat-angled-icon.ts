import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airline-seat-flat-angled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14 16.64-4-1.45V17h4zM6 8.5c.15 0 .3-.03.44-.1.49-.24.7-.84.46-1.34A.982.982 0 0 0 6 6.5a.999.999 0 0 0-.9 1.43c.2.42.59.57.9.57zm13.16 2.52-6.69-2.41-.7 1.91 8.59 3.11.01-.02c.19-.51.17-1.05-.06-1.53a2 2 0 0 0-1.15-1.06z"
      opacity=".3"
    />
    <svg:path
      d="M1.5 12.14 8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm8.5 3.05 4 1.44V17h-4v-1.81zm9.84-6.05-8.56-3.09-2.08 5.66 12.36 4.47.69-1.89a4 4 0 0 0-2.41-5.15zm.53 4.46-.01.02-8.59-3.11.7-1.91 6.69 2.41c.52.19.93.56 1.15 1.05.23.49.25 1.04.06 1.54zM6 10.5a3.01 3.01 0 0 0 2.71-4.3A3.013 3.013 0 0 0 6 4.5c-.44 0-.88.1-1.3.3a2.99 2.99 0 0 0-1.4 4c.51 1.07 1.58 1.7 2.7 1.7zm-.94-3.34c.05-.14.18-.4.51-.56a.992.992 0 0 1 1.33.46c.24.5.02 1.1-.47 1.34a.979.979 0 0 1-1.32-.46.986.986 0 0 1-.05-.78z"
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
export class SiAirlineSeatFlatAngledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
