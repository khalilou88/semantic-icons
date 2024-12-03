import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-volume-1-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0052 4.65867C11.4562 3.36887 13.75 4.39892 13.75 6.34034V17.6598C13.75 19.6012 11.4562 20.6313 10.0052 19.3415L6.80862 16.5001H4.75C3.50736 16.5001 2.5 15.4927 2.5 14.2501V9.75009C2.5 8.50745 3.50736 7.50009 4.75 7.50009H6.80858L10.0052 4.65867ZM12.25 6.34034C12.25 5.6932 11.4854 5.34985 11.0017 5.77978L7.592 8.81064C7.45472 8.93268 7.27742 9.00009 7.09373 9.00009H4.75C4.33579 9.00009 4 9.33587 4 9.75009V14.2501C4 14.6643 4.33579 15.0001 4.75 15.0001H7.09377C7.27745 15.0001 7.45475 15.0675 7.59204 15.1895L11.0017 18.2204C11.4854 18.6503 12.25 18.3069 12.25 17.6598V6.34034Z"
        fill="#323544"
      />
      <path
        d="M17.0769 15.1644C18.6384 13.4253 18.6384 10.5756 17.0769 8.83653C16.8001 8.52833 16.8256 8.05414 17.1338 7.7774C17.442 7.50066 17.9162 7.52617 18.193 7.83437C20.2664 10.1435 20.2664 13.8574 18.193 16.1665C17.9162 16.4747 17.442 16.5002 17.1338 16.2235C16.8256 15.9468 16.8001 15.4726 17.0769 15.1644Z"
        fill="#323544"
      />
      <path
        d="M14.9853 10.6534C15.6729 11.4179 15.6729 12.5831 14.9853 13.3476C14.7084 13.6556 14.7335 14.1298 15.0415 14.4068C15.3495 14.6838 15.8237 14.6586 16.1007 14.3506C17.3011 13.0157 17.3011 10.9852 16.1007 9.65036C15.8237 9.34236 15.3495 9.31721 15.0415 9.59418C14.7335 9.87115 14.7084 10.3454 14.9853 10.6534Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVolume1Icon {
  readonly class = input('');
}