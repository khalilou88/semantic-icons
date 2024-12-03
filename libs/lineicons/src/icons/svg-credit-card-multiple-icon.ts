import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-credit-card-multiple-icon',
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
        d="M3.9104 6.27879C2.71011 6.60041 1.99779 7.83416 2.31941 9.03446L4.75231 18.1016V18.4998C4.75231 19.7424 5.75967 20.7498 7.00231 20.7498H20.0023C21.2449 20.7498 22.2523 19.7424 22.2523 18.4998V9.82408C22.2523 8.59588 21.2682 7.59753 20.0455 7.57448L19.2231 4.50513C18.9015 3.30483 17.6677 2.59252 16.4674 2.91414L3.9104 6.27879ZM20.7523 10.8172H6.25231V9.82408C6.25231 9.40986 6.58809 9.07408 7.00231 9.07408H20.0023C20.4165 9.07408 20.7523 9.40986 20.7523 9.82408V10.8172ZM4.75231 12.3186L3.7683 8.64623C3.6611 8.24613 3.89853 7.83488 4.29863 7.72768L16.8557 4.36303C17.2558 4.25582 17.667 4.49326 17.7742 4.89336L18.4925 7.57408H7.00231C5.75967 7.57408 4.75231 8.58143 4.75231 9.82408V12.3186ZM6.25231 13.6145H20.7523V18.4998C20.7523 18.914 20.4165 19.2498 20.0023 19.2498H7.00231C6.5881 19.2498 6.25231 18.914 6.25231 18.4998V13.6145Z"
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
export class SvgCreditCardMultipleIcon {
  readonly class = input('');
}