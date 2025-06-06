import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-btc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.6152 11.4516C17.712 10.9032 18.3894 9.90323 18.2604 8.25806C18.0346 6.03226 16.2281 5.25806 13.7765 5.06452V2H11.8733V5.03226C11.3571 5.03226 10.8733 5.03226 10.3894 5.06452V2H8.45391V5.09677C7.77649 5.12903 6.97003 5.09677 4.64746 5.09677V7.12903C6.13133 7.09677 6.90552 7 7.09907 8V16.5161C6.97004 17.2903 6.35713 17.1613 5.00229 17.1613L4.64746 19.4194C8.09907 19.4194 8.45391 19.4194 8.45391 19.4194V22H10.3571V19.3548C10.9055 19.3548 11.3894 19.3548 11.841 19.3548V22H13.7442V19.3548C16.9378 19.1613 19.0668 18.3871 19.3249 15.3871C19.5507 12.9677 18.3894 11.9032 16.6152 11.4516ZM10.3571 7.22581C11.3894 7.22581 14.7765 6.87097 14.7765 9.12903C14.7765 11.2581 11.4216 11 10.3571 11V7.22581ZM10.3571 17.0968V12.9677C11.6152 12.9677 15.5507 12.6129 15.5507 15.0645C15.5829 17.3548 11.6152 17.0968 10.3571 17.0968Z"
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
export class SiBtcIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
