import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hand-mic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.0897 4.90859C16.8795 2.69844 13.2962 2.69844 11.086 4.90859C9.77098 6.22364 9.23894 8.02539 9.48801 9.7317L9.51667 9.92805L3.79624 16.56C3.02657 17.4524 3.07577 18.7874 3.90902 19.6206L4.37791 20.0895C5.21116 20.9228 6.54617 20.972 7.43849 20.2023L14.0707 14.4817L14.2666 14.5103C15.9729 14.7593 17.7746 14.2273 19.0897 12.9123C21.2998 10.7021 21.2998 7.11874 19.0897 4.90859ZM12.1467 5.96925C13.771 4.34489 16.4047 4.34489 18.029 5.96925C19.6534 7.59362 19.6534 10.2272 18.029 11.8516C17.1239 12.7567 15.9059 13.158 14.7212 13.0538L10.9445 9.27704C10.8403 8.09239 11.2416 6.87438 12.1467 5.96925ZM4.93209 17.5398L10.5601 11.0149L12.9836 13.4385L6.45876 19.0664C6.16132 19.323 5.71632 19.3066 5.43857 19.0289L4.96968 18.56C4.69193 18.2822 4.67553 17.8372 4.93209 17.5398Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHandMicIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
