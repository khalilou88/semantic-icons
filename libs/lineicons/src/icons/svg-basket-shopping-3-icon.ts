import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-basket-shopping-3-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 11.5001C10.1642 11.5001 10.5 11.8359 10.5 12.2501V16.2501C10.5 16.6643 10.1642 17.0001 9.75 17.0001C9.33579 17.0001 9 16.6643 9 16.2501V12.2501C9 11.8359 9.33579 11.5001 9.75 11.5001Z"
        fill="#323544"
      />
      <path
        d="M15 12.2501C15 11.8359 14.6642 11.5001 14.25 11.5001C13.8358 11.5001 13.5 11.8359 13.5 12.2501V16.2501C13.5 16.6643 13.8358 17.0001 14.25 17.0001C14.6642 17.0001 15 16.6643 15 16.2501V12.2501Z"
        fill="#323544"
      />
      <path
        d="M10.68 2.13565C11.0194 2.37319 11.1019 2.84084 10.8644 3.18017L8.36533 6.75006H15.6347L13.1356 3.18017C12.8981 2.84084 12.9806 2.37319 13.32 2.13565C13.6593 1.89811 14.1269 1.98062 14.3645 2.31996L17.4657 6.75006H19.75C20.9926 6.75006 22 7.75742 22 9.00006V9.78517C22 10.4635 21.694 11.1057 21.1671 11.5329L20.0045 12.4755L19.2012 18.7843C19.0581 19.908 18.102 20.7501 16.9692 20.7501H7.03079C5.89803 20.7501 4.94189 19.908 4.79881 18.7843L3.99548 12.4755L2.83295 11.5329C2.30604 11.1056 2 10.4635 2 9.78517V9.00006C2 7.75742 3.00736 6.75006 4.25 6.75006H6.53432L9.63552 2.31996C9.87306 1.98062 10.3407 1.89811 10.68 2.13565ZM19.75 8.25006H4.25C3.83579 8.25006 3.5 8.58585 3.5 9.00006V9.78517C3.5 10.0113 3.60201 10.2253 3.77765 10.3677L5.17383 11.4998C5.32379 11.6214 5.42109 11.7961 5.44547 11.9876L6.28679 18.5948C6.33449 18.9694 6.6532 19.2501 7.03079 19.2501H16.9692C17.3468 19.2501 17.6655 18.9694 17.7132 18.5948L18.5545 11.9876C18.5789 11.7961 18.6762 11.6214 18.8262 11.4998L20.2224 10.3677C20.398 10.2253 20.5 10.0113 20.5 9.78517V9.00006C20.5 8.58585 20.1642 8.25006 19.75 8.25006Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBasketShopping3Icon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
