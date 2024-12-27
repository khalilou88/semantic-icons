import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tiktok-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4381 2.01667C13.5298 2 14.6131 2.00833 15.6964 2C15.7631 3.27498 16.2214 4.57497 17.1548 5.47496C18.0881 6.39995 19.4047 6.82494 20.688 6.9666V10.3249C19.488 10.2832 18.2797 10.0332 17.1881 9.51656C16.7131 9.29991 16.2714 9.02491 15.8381 8.74157C15.8298 11.1749 15.8464 13.6082 15.8214 16.0332C15.7548 17.1998 15.3714 18.3581 14.6964 19.3164C13.6048 20.9164 11.7131 21.9581 9.7715 21.9914C8.57986 22.0581 7.38819 21.7331 6.37154 21.1331C4.68823 20.1414 3.50492 18.3248 3.32992 16.3748C3.31325 15.9582 3.30492 15.5415 3.32158 15.1332C3.47158 13.5499 4.25491 12.0332 5.47156 10.9999C6.85488 9.7999 8.78817 9.22491 10.5965 9.56656C10.6131 10.7999 10.5631 12.0332 10.5631 13.2665C9.73816 12.9999 8.77151 13.0749 8.04652 13.5749C7.52153 13.9165 7.12154 14.4415 6.91319 15.0332C6.7382 15.4582 6.7882 15.9248 6.79654 16.3748C6.99654 17.7415 8.31318 18.8914 9.71316 18.7665C10.6465 18.7581 11.5381 18.2165 12.0215 17.4248C12.1798 17.1498 12.3548 16.8665 12.3631 16.5415C12.4465 15.0498 12.4131 13.5665 12.4215 12.0749C12.4298 8.71657 12.4131 5.36661 12.4381 2.01667Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTiktokIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
