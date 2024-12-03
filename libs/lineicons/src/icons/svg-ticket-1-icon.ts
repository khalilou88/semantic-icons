import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ticket-1-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.25 6C3.83579 6 3.5 6.33579 3.5 6.75V9.02784C4.83047 9.36221 5.81555 10.5663 5.81555 12.0005C5.81555 13.4348 4.83047 14.6389 3.5 14.9733V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V14.973C19.1701 14.6382 18.1855 13.4344 18.1855 12.0005C18.1855 10.5667 19.1701 9.36287 20.5 9.02811V6.75C20.5 6.33579 20.1642 6 19.75 6H4.25ZM2 6.75C2 5.50736 3.00736 4.5 4.25 4.5H19.75C20.9926 4.5 22 5.50736 22 6.75V9.68555C22 10.0997 21.6643 10.4355 21.2502 10.4355C20.386 10.4357 19.6855 11.1363 19.6855 12.0005C19.6855 12.8647 20.386 13.5653 21.2502 13.5655C21.6643 13.5656 22 13.9014 22 14.3155V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V14.3155C2 13.9013 2.33579 13.5655 2.75 13.5655C3.61433 13.5655 4.31555 12.8649 4.31555 12.0005C4.31555 11.1362 3.61487 10.4355 2.75055 10.4355C2.33633 10.4355 2 10.0998 2 9.68555V6.75Z"
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
export class SvgTicket1Icon {
  readonly class = input('');
}