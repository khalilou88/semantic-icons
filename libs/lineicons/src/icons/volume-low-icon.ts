import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-volume-low-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.75 6.34034C13.75 4.39892 11.4562 3.36887 10.0052 4.65867L6.80858 7.50009H4.75C3.50736 7.50009 2.5 8.50745 2.5 9.75009V14.2501C2.5 15.4927 3.50736 16.5001 4.75 16.5001H6.80862L10.0052 19.3415C11.4562 20.6313 13.75 19.6012 13.75 17.6598V6.34034ZM11.0017 5.77978C11.4854 5.34985 12.25 5.6932 12.25 6.34034V17.6598C12.25 18.3069 11.4854 18.6503 11.0017 18.2204L7.59204 15.1895C7.45475 15.0675 7.27745 15.0001 7.09377 15.0001H4.75C4.33579 15.0001 4 14.6643 4 14.2501V9.75009C4 9.33587 4.33579 9.00009 4.75 9.00009H7.09373C7.27742 9.00009 7.45472 8.93268 7.592 8.81064L11.0017 5.77978Z"
      fill="#323544"
    />
    <svg:path
      d="M14.9853 10.6534C15.6729 11.4179 15.6729 12.5831 14.9853 13.3476C14.7084 13.6556 14.7335 14.1298 15.0415 14.4068C15.3495 14.6838 15.8237 14.6586 16.1007 14.3506C17.3011 13.0157 17.3011 10.9852 16.1007 9.65036C15.8237 9.34236 15.3495 9.31721 15.0415 9.59418C14.7335 9.87115 14.7084 10.3454 14.9853 10.6534Z"
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
export class SiVolumeLowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
