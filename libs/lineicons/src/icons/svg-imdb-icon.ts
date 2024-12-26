import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-imdb-icon',
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
        d="M20.6452 2H3.35487C2.61294 2.03226 2.03229 2.64516 1.96777 3.32258V20.6452C2.03229 21.3548 2.58068 21.9032 3.29035 22H20.7097C21.4516 21.9677 22.0323 21.3226 22.0323 20.5806V3.41935C21.9678 2.67742 21.3871 2.03226 20.6452 2ZM21.5807 20.5806C21.5807 21.129 21.1613 21.5484 20.6774 21.5806H3.29035C2.77423 21.5484 2.38713 21.129 2.38713 20.6129V3.35484C2.41939 2.83871 2.83874 2.45161 3.35487 2.3871H20.6129C21.1613 2.41935 21.5807 2.83871 21.5807 3.3871V20.5806Z"
        fill="#323544"
      />
      <path
        d="M5.96776 8.8709H4.38713V14.9999H5.96776V8.8709Z"
        fill="#323544"
      />
      <path
        d="M8.96828 11.7741L8.74247 10.1935C8.71021 9.70961 8.61344 9.22574 8.54892 8.8709H6.51666V14.9999H7.8715V10.9677L8.45215 14.9999H9.45215L10.0005 10.8709V14.9999H11.3554V8.8709H9.2586L8.96828 11.7741Z"
        fill="#323544"
      />
      <path
        d="M15.2581 9.35497C15.1291 9.16142 14.9032 9.0969 14.6129 9.00013C14.3549 8.96787 13.871 8.90335 13.1613 8.90335H11.9678V15.0324H13.871C14.3549 15.0324 15.0323 15.0969 15.3226 14.613C15.4516 14.4195 15.4839 14.1614 15.5161 13.9034C15.5484 13.6775 15.5484 13.4517 15.5484 13.1937V11.0646C15.5484 10.484 15.5484 10.0969 15.5161 9.8711C15.4839 9.67755 15.3871 9.51626 15.2581 9.35497ZM14.1291 13.0969C14.1291 13.5163 14.0323 13.7421 14 13.8388C13.9678 13.9356 13.8065 13.9679 13.5807 13.9679V9.90336C13.7742 9.90336 13.8387 9.90336 13.9355 9.93561C13.9678 9.96787 14.0323 10.0324 14.0645 10.1292C14.0968 10.2259 14.0968 10.3872 14.0968 10.6775V13.0969H14.1291Z"
        fill="#323544"
      />
      <path
        d="M19.5167 10.8064C19.4521 10.6774 19.3554 10.6128 19.1941 10.5483C18.936 10.4515 18.6134 10.4193 18.3231 10.4838C18.1941 10.5161 18.0651 10.5483 17.936 10.6128C17.8715 10.6451 17.807 10.6774 17.7425 10.7419C17.7102 10.7741 17.5812 10.8386 17.5812 10.8709V8.8709H16.0328V14.9999H17.4844L17.5812 14.5806C17.7102 14.7096 17.8392 14.8386 18.0005 14.9354C18.1296 15.0322 18.3231 15.0322 18.4844 15.0322C18.6457 15.0322 18.8392 14.9999 19.0005 14.9354C19.3554 14.7741 19.5812 14.4193 19.6134 14.0322C19.6457 13.4838 19.6457 12.9354 19.6457 12.3548C19.6457 11.9677 19.6457 11.5806 19.6457 11.2257C19.6134 11.0645 19.5812 10.9354 19.5167 10.8064ZM18.1618 13.5483C18.1618 13.8064 18.1618 14.0322 18.1296 14.0967C18.0973 14.1935 18.0005 14.2257 17.8715 14.2257C17.7747 14.2257 17.7425 14.1935 17.678 14.129C17.6457 14.0322 17.6457 13.9032 17.6457 13.6451V11.9999C17.6457 11.7419 17.6457 11.5483 17.678 11.5161C17.7102 11.4838 17.7747 11.4193 17.8715 11.4193C17.9683 11.4193 18.0973 11.4515 18.1296 11.5483C18.1618 11.6451 18.1618 11.7741 18.1618 12.0322V13.5483Z"
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
export class SvgImdbIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
