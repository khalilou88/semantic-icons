import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-trello-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5201 2.01562H4.51208C3.12721 2.01562 2 3.14284 2 4.5277C2 4.5277 2 4.33447 2 19.5035C2 20.8562 3.12721 21.9834 4.51208 21.9834H19.4879C20.8406 21.9834 22 20.8562 22 19.4713V4.5277C21.9678 3.14284 20.8728 2.01562 19.5201 2.01562ZM10.7923 17.1203C10.7923 17.7644 10.2448 18.3119 9.60064 18.3119H5.89694C5.25282 18.3119 4.70531 17.7644 4.67311 17.1203V5.78374C4.67311 5.13962 5.22061 4.59211 5.86473 4.59211H9.53623C10.1804 4.59211 10.7279 5.13962 10.7279 5.78374L10.7923 17.1203ZM19.3913 12.1283C19.3913 12.7725 18.8438 13.32 18.1997 13.32H14.5604C13.9163 13.32 13.3688 12.7725 13.3688 12.1283V5.78374C13.3688 5.13962 13.9163 4.59211 14.5604 4.59211H18.1997C18.8438 4.59211 19.3913 5.13962 19.3913 5.78374V12.1283Z"
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
export class SvgTrelloIcon {
  readonly class = input('');
}
