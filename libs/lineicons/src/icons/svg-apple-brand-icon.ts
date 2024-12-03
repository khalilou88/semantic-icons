import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apple-brand-icon',
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
        d="M19.7413 8.81869C19.6235 8.90869 17.5433 10.0628 17.5433 12.6291C17.5433 15.5974 20.1903 16.6475 20.2695 16.6735C20.2573 16.7375 19.849 18.1116 18.8739 19.5118C18.0044 20.7439 17.0964 21.974 15.715 21.974C14.3336 21.974 13.9781 21.1839 12.3834 21.1839C10.8293 21.1839 10.2768 22 9.01321 22C7.74964 22 6.86798 20.8599 5.85429 19.4598C4.68013 17.8156 3.73145 15.2613 3.73145 12.8371C3.73145 8.94872 6.2992 6.88648 8.82631 6.88648C10.1691 6.88648 11.2884 7.75458 12.1315 7.75458C12.9339 7.75458 14.1853 6.83449 15.7129 6.83449C16.2919 6.83449 18.3721 6.88648 19.7413 8.81869ZM14.9877 5.18832C15.6195 4.45025 16.0664 3.42614 16.0664 2.40204C16.0664 2.26003 16.0542 2.11601 16.0278 2C14.9999 2.038 13.777 2.67407 13.0395 3.51615C12.4606 4.16422 11.9202 5.18832 11.9202 6.22642C11.9202 6.38247 11.9466 6.53845 11.9588 6.58844C12.0238 6.60047 12.1294 6.61446 12.2351 6.61446C13.1574 6.61446 14.3173 6.00639 14.9877 5.18832Z"
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
export class SvgAppleBrandIcon {
  readonly class = input('');
}