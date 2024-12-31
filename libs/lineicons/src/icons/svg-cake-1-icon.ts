import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cake-1-icon',
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
        d="M20.25 7.7494V6.75C20.25 5.50736 19.2426 4.5 18 4.5H6C4.75736 4.5 3.75 5.50736 3.75 6.75V7.7494C3.74973 7.761 3.74973 7.77257 3.75 7.78411V10.8058C2.74801 11.0331 2 11.9292 2 13V18.75C2 19.1642 2.33579 19.5 2.75 19.5H21.25C21.6642 19.5 22 19.1642 22 18.75V13C22 11.9292 21.252 11.0331 20.25 10.8058V7.78411C20.2503 7.77257 20.2503 7.761 20.25 7.7494ZM6 6H18C18.4142 6 18.75 6.33579 18.75 6.75V7.22139L16.6755 7.89419C16.0739 8.0893 15.4261 8.0893 14.8245 7.89419L13.3883 7.42839C12.4859 7.13573 11.5141 7.13573 10.6117 7.42839L9.17552 7.89419C8.57393 8.0893 7.92607 8.0893 7.32449 7.89419L5.25 7.22139V6.75C5.25 6.33579 5.58579 6 6 6ZM18.75 8.7983V10.75H5.25V8.7983L6.86173 9.32103C7.76411 9.61369 8.73589 9.61369 9.63827 9.32103L11.0745 8.85523C11.6761 8.66012 12.3239 8.66012 12.9255 8.85523L14.3617 9.32103C15.2641 9.61369 16.2359 9.61369 17.1383 9.32103L18.75 8.7983ZM4.25 12.25H19.75C20.1642 12.25 20.5 12.5858 20.5 13V13.8298L17.5505 14.7864C16.9489 14.9815 16.3011 14.9815 15.6995 14.7864L13.3883 14.0368C12.4859 13.7441 11.5141 13.7441 10.6117 14.0368L8.30051 14.7864C7.69893 14.9815 7.05107 14.9815 6.44949 14.7864L3.5 13.8298V13C3.5 12.5858 3.83579 12.25 4.25 12.25ZM20.5 15.4067V18H3.5V15.4067L5.98673 16.2132C6.88911 16.5059 7.86089 16.5059 8.76327 16.2132L11.0745 15.4636C11.6761 15.2685 12.3239 15.2685 12.9255 15.4636L15.2367 16.2132C16.1391 16.5059 17.1109 16.5059 18.0133 16.2132L20.5 15.4067Z"
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
export class SvgCake1Icon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
