import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tower-broadcast-1-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5568 3.79138C19.8802 3.53259 20.3522 3.58497 20.611 3.90839C22.4874 6.2534 22.4874 10.0006 20.611 12.3456C20.3522 12.669 19.8802 12.7214 19.5568 12.4626C19.2334 12.2038 19.181 11.7318 19.4398 11.4084C20.8778 9.61126 20.8778 6.6427 19.4398 4.84557C19.181 4.52216 19.2334 4.05018 19.5568 3.79138Z"
        fill="#323544"
      />
      <path
        d="M4.65862 4.84557C4.91741 4.52216 4.86503 4.05018 4.54161 3.79138C4.2182 3.53259 3.74622 3.58497 3.48743 3.90839C1.61096 6.2534 1.61096 10.0006 3.48743 12.3456C3.74622 12.669 4.2182 12.7214 4.54161 12.4626C4.86503 12.2038 4.91741 11.7318 4.65862 11.4084C3.22057 9.61126 3.22056 6.6427 4.65862 4.84557Z"
        fill="#323544"
      />
      <path
        d="M8.09555 6.87313C7.40305 7.56563 7.40305 8.6884 8.09555 9.38091C8.38844 9.6738 8.38844 10.1487 8.09555 10.4416C7.80266 10.7345 7.32778 10.7345 7.03489 10.4416C5.7566 9.16328 5.7566 7.09076 7.03489 5.81247C7.32778 5.51958 7.80266 5.51958 8.09555 5.81247C8.38844 6.10536 8.38844 6.58024 8.09555 6.87313Z"
        fill="#323544"
      />
      <path
        d="M16.0021 6.87313C16.6946 7.56563 16.6946 8.6884 16.0021 9.38091C15.7092 9.6738 15.7092 10.1487 16.0021 10.4416C16.295 10.7345 16.7699 10.7345 17.0628 10.4416C18.3411 9.16328 18.3411 7.09076 17.0628 5.81247C16.7699 5.51958 16.295 5.51958 16.0021 5.81247C15.7092 6.10536 15.7092 6.58024 16.0021 6.87313Z"
        fill="#323544"
      />
      <path
        d="M10.3008 8.12698C10.3008 7.16048 11.0843 6.37698 12.0508 6.37698H12.0518C13.0183 6.37698 13.8018 7.16048 13.8018 8.12698C13.8018 8.82624 13.3917 9.42971 12.7988 9.70997L12.7988 20.377C12.7988 20.7912 12.463 21.127 12.0488 21.127C11.6346 21.127 11.2988 20.7912 11.2988 20.377L11.2988 9.70764C10.7086 9.42638 10.3008 8.82431 10.3008 8.12698Z"
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
export class SvgTowerBroadcast1Icon {
  readonly class = input('');
}
