import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-joomla-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9294 4.71136C21.9294 3.26222 20.7546 2.08746 19.3055 2.08746C17.9823 2.08746 16.8884 3.06705 16.7082 4.34049L16.6817 4.32647C14.5358 3.35864 12.7282 5.07289 12.7282 5.07289L7.94703 9.87754L9.8362 11.6968L13.6845 7.91602C15.4816 6.11891 16.4601 7.33526 16.4601 7.33526C17.8129 8.47809 16.5067 9.83089 16.5067 9.83089L18.4426 11.6968C20.0234 9.98946 20.1151 8.49935 19.6345 7.314C20.9283 7.152 21.9294 6.04897 21.9294 4.71136Z"
        fill="#323544"
      />
      <path
        d="M19.6589 16.7788C19.6679 16.762 19.6729 16.7523 19.6729 16.7523C20.6408 14.6063 18.9265 12.7988 18.9265 12.7988L14.1218 8.01742L12.3025 9.90674L16.0834 13.755C17.8804 15.5521 16.6641 16.5307 16.6641 16.5307C15.5213 17.8835 14.1685 16.5773 14.1685 16.5773L12.3025 18.5131C14.0099 20.0939 15.5 20.1856 16.6853 19.7051C16.8473 20.9988 17.9504 22 19.288 22C20.7372 22 21.9119 20.8252 21.9119 19.3761C21.9119 18.0529 20.9323 16.9591 19.6589 16.7788Z"
        fill="#323544"
      />
      <path
        d="M14.1627 12.3032L10.3143 16.0839C8.51721 17.8811 7.53871 16.6648 7.53871 16.6648C6.18591 15.5219 7.49206 14.1692 7.49206 14.1692L5.55632 12.3032C3.97548 14.0105 3.88374 15.5006 4.36419 16.6859C3.07042 16.848 2.06934 17.951 2.06934 19.2886C2.06934 20.7378 3.2441 21.9125 4.69331 21.9125C6.01652 21.9125 7.11036 20.933 7.29058 19.6596C7.3074 19.6685 7.31713 19.6735 7.31713 19.6735C9.46308 20.6416 11.2705 18.9271 11.2705 18.9271L16.0518 14.1224L14.1627 12.3032Z"
        fill="#323544"
      />
      <path
        d="M7.91541 10.245C6.1183 8.44787 7.3345 7.46929 7.3345 7.46929C8.47748 6.11649 9.8302 7.42272 9.8302 7.42272L11.6962 5.48698C9.98885 3.90615 8.49875 3.81448 7.31339 4.29493C7.1514 3.00109 6.04844 2 4.7106 2C3.26169 2 2.08701 3.17476 2.08685 4.6239C2.08685 5.94718 3.06637 7.04102 4.33988 7.22124C4.33093 7.23806 4.32594 7.24788 4.32594 7.24788C3.35788 9.39366 5.07228 11.2011 5.07228 11.2011L9.87709 15.9825L11.6963 14.0933L7.91541 10.245Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgJoomlaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
