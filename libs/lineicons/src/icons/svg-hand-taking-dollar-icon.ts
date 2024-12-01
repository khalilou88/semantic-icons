import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-taking-dollar-icon',
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
        d="M15.3086 2C15.7228 2 16.0586 2.33579 16.0586 2.75V2.91898C16.807 3.10815 17.3609 3.78601 17.3609 4.59323C17.3609 5.00744 17.0251 5.34323 16.6109 5.34323C16.1967 5.34323 15.8609 5.00744 15.8609 4.59323C15.8609 4.46796 15.7594 4.36641 15.6341 4.36641H15.2391C14.9724 4.36641 14.7563 4.58257 14.7563 4.84921C14.7563 5.05046 14.8811 5.2306 15.0695 5.30127L16.0744 5.67811C16.8482 5.96833 17.3609 6.70814 17.3609 7.53464C17.3609 8.39065 16.8185 9.11996 16.0586 9.39759V9.63372C16.0586 10.0479 15.7228 10.3837 15.3086 10.3837C14.8944 10.3837 14.5586 10.0479 14.5586 9.63372V9.46488C13.8101 9.2757 13.2563 8.59785 13.2563 7.79062C13.2563 7.37641 13.5921 7.04062 14.0063 7.04062C14.4205 7.04062 14.7563 7.37641 14.7563 7.79062C14.7563 7.91589 14.8578 8.01744 14.9831 8.01744H15.3781C15.6448 8.01744 15.8609 7.80129 15.8609 7.53464C15.8609 7.3334 15.7361 7.15326 15.5477 7.08259L14.5428 6.70575C13.7689 6.41552 13.2563 5.67571 13.2563 4.84921C13.2563 3.99321 13.7987 3.2639 14.5586 2.98626V2.75C14.5586 2.33579 14.8944 2 15.3086 2Z"
        fill="#323544"
      />
      <path
        d="M19.4266 11.0844C20.0839 10.5513 21.0447 10.6316 21.6044 11.2664C22.1114 11.8415 22.1317 12.6979 21.6525 13.2964L17.7859 18.125C17.4104 18.5938 16.8423 18.8667 16.2417 18.8667H10.0685C9.8825 18.8667 9.70317 18.9358 9.56527 19.0606L9.04042 19.5355C9.14503 19.864 9.01125 20.2324 8.7004 20.4119L6.1238 21.8995C5.76508 22.1066 5.30638 21.9837 5.09928 21.625L2.10061 16.4311C1.8935 16.0724 2.01641 15.6137 2.37513 15.4066L4.95173 13.919C5.18986 13.7815 5.47206 13.7895 5.69546 13.9153L7.38764 12.5626C7.94114 12.1201 8.64057 11.8151 9.41278 11.8116C10.2262 11.8079 11.5119 11.8799 12.6754 12.3045H15.2732C15.9345 12.3045 16.512 12.6637 16.8212 13.1975L19.4266 11.0844ZM8.55886 17.9483C8.97255 17.574 9.51056 17.3667 10.0685 17.3667H16.2417C16.3869 17.3667 16.5242 17.3007 16.615 17.1874L20.4816 12.3588C20.5053 12.3292 20.5043 12.2868 20.4792 12.2584C20.4515 12.227 20.404 12.223 20.3715 12.2494L16.5205 15.3728C16.1984 15.6865 15.7583 15.8798 15.2732 15.8798H12.5383C12.1241 15.8798 11.7883 15.544 11.7883 15.1298C11.7883 14.7156 12.1241 14.3798 12.5383 14.3798H15.2732C15.3195 14.3798 15.3633 14.3688 15.4021 14.3494C15.4102 14.3422 15.4184 14.3352 15.4269 14.3284L15.5 14.2691C15.5381 14.2203 15.5608 14.1589 15.5608 14.0922C15.5608 13.9333 15.432 13.8045 15.2732 13.8045H12.5912C12.4613 13.8045 12.3365 13.7799 12.222 13.7363C11.296 13.3834 10.1887 13.3081 9.41955 13.3116C9.04628 13.3133 8.66549 13.4614 8.32425 13.7342L6.53627 15.1635L8.2864 18.1948L8.55886 17.9483ZM3.77464 16.3307L6.02332 20.2255L7.30088 19.4879L5.05221 15.5931L3.77464 16.3307Z"
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
export class SvgHandTakingDollarIcon {
  readonly class = input('');
}
