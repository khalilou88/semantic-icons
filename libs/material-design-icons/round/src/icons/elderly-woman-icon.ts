import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-elderly-woman-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.52 11c-1.57 0-2.94-.9-3.6-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5L7 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2L11 19h2v3c0 .55.45 1 1 1s1-.45 1-1v-2.71c0-.22-.04-.43-.1-.64L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81V13c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.79-.62-1.5-1.48-1.5zM11.6 2.91c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
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
export class SiElderlyWomanIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
