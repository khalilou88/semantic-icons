import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-share-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.2755 2.28563C14.5558 2.16954 14.8783 2.23371 15.0928 2.44821L22.0929 9.44821C22.2335 9.58886 22.3125 9.77963 22.3125 9.97854C22.3125 10.1775 22.2335 10.3682 22.0929 10.5089L15.0928 17.5089C14.8783 17.7234 14.5558 17.7875 14.2755 17.6715C13.9952 17.5554 13.8125 17.2819 13.8125 16.9785V13.1805C8.99081 13.5129 5.04239 17.0253 4.05219 21.636C3.97796 21.9817 3.67244 22.2285 3.31891 22.2285C2.96538 22.2285 2.65986 21.9817 2.58563 21.636C2.4066 20.8024 2.3125 19.9379 2.3125 19.0523C2.3125 12.5386 7.39629 7.21238 13.8125 6.82486V2.97854C13.8125 2.67519 13.9952 2.40171 14.2755 2.28563ZM15.3125 4.7892V7.55227C15.3125 7.96649 14.9767 8.30227 14.5625 8.30227C9.00767 8.30227 4.43687 12.5155 3.87136 17.9206C5.96857 14.1816 9.96993 11.6548 14.5625 11.6548C14.9767 11.6548 15.3125 11.9906 15.3125 12.4048V15.1679L20.5019 9.97854L15.3125 4.7892Z"
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
export class SiShare1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
