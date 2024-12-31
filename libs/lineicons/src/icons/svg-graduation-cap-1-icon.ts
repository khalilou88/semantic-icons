import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-graduation-cap-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2977 3.30965C12.1077 3.22751 11.8923 3.22751 11.7023 3.30965L2.45232 7.30965C2.17775 7.42838 2 7.69891 2 7.99805C2 8.29718 2.17775 8.56771 2.45232 8.68644L5.125 9.84219V15.9259C5.125 16.0717 5.16749 16.2143 5.24727 16.3363L5.875 15.9259C5.24727 16.3363 5.24706 16.336 5.24727 16.3363L5.24814 16.3376L5.2492 16.3392L5.25188 16.3433L5.25947 16.3546C5.26553 16.3636 5.27359 16.3753 5.28365 16.3897C5.30378 16.4184 5.33196 16.4577 5.36827 16.5059C5.44085 16.6023 5.54621 16.735 5.68494 16.8917C5.96196 17.2047 6.375 17.6169 6.9293 18.0282C8.04166 18.8535 9.72592 19.6759 12 19.6759C14.2741 19.6759 15.9583 18.8535 17.0707 18.0282C17.625 17.6169 18.038 17.2047 18.3151 16.8917C18.4538 16.735 18.5591 16.6023 18.6317 16.5059C18.668 16.4577 18.6962 16.4184 18.7163 16.3897C18.7264 16.3753 18.7345 16.3636 18.7405 16.3546L18.7481 16.3433L18.7508 16.3392L18.7519 16.3376C18.7521 16.3373 18.7527 16.3363 18.125 15.9259L18.7527 16.3363C18.8325 16.2143 18.875 16.0717 18.875 15.9259V9.84219L20.5 9.13949V14.7188C20.5 15.133 20.8358 15.4688 21.25 15.4688C21.6642 15.4688 22 15.133 22 14.7188V8C22 7.99967 22 8.00033 22 8C22 7.99968 22 7.99837 22 7.99805C22 7.69891 21.8222 7.42838 21.5477 7.30965L12.2977 3.30965ZM17.375 10.4908V15.6793C17.3276 15.7392 17.2666 15.8131 17.1919 15.8975C16.971 16.1471 16.6334 16.4848 16.1769 16.8236C15.2676 17.4982 13.8894 18.1759 12 18.1759C10.1106 18.1759 8.73237 17.4982 7.8231 16.8236C7.36658 16.4848 7.02902 16.1471 6.80814 15.8975C6.73344 15.8131 6.67243 15.7392 6.625 15.6793V10.4908L11.7023 12.6864C11.8923 12.7686 12.1077 12.7686 12.2977 12.6864L17.375 10.4908ZM12 11.1809L4.63959 7.99805L12 4.81517L19.3604 7.99805L12 11.1809Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGraduationCap1Icon {
  readonly class = input<string>('');
}
