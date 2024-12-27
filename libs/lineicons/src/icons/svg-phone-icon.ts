import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-phone-icon',
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
        d="M11 17.5C10.5858 17.5 10.25 17.8358 10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 2C6.75736 2 5.75 3.00736 5.75 4.25V19.75C5.75 20.9926 6.75736 22 8 22H16C17.2426 22 18.25 20.9926 18.25 19.75V4.25C18.25 3.00736 17.2426 2 16 2H8ZM7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5H16C16.4142 3.5 16.75 3.83579 16.75 4.25V19.75C16.75 20.1642 16.4142 20.5 16 20.5H8C7.58579 20.5 7.25 20.1642 7.25 19.75V4.25Z"
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
export class SvgPhoneIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
