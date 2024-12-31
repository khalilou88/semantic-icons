import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-currency-euro-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.875 6c.09-.22.195-.42.31-.598.413-.638.895-.902 1.315-.902.264 0 .54.1.814.325a.75.75 0 1 0 .953-1.158C9.772 3.259 9.169 3 8.5 3c-1.099 0-1.992.687-2.574 1.587A5.518 5.518 0 0 0 5.285 6H4.75a.75.75 0 0 0 0 1.5h.267a7.372 7.372 0 0 0 0 1H4.75a.75.75 0 0 0 0 1.5h.535c.156.52.372.998.64 1.413C6.509 12.313 7.402 13 8.5 13c.669 0 1.272-.26 1.767-.667a.75.75 0 0 0-.953-1.158c-.275.226-.55.325-.814.325-.42 0-.902-.264-1.315-.902a3.722 3.722 0 0 1-.31-.598H8.25a.75.75 0 0 0 0-1.5H6.521a5.854 5.854 0 0 1 0-1H8.25a.75.75 0 0 0 0-1.5H6.875Z"
        clip-rule="evenodd"
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
export class SvgCurrencyEuroIcon {
  readonly class = input<string>('');
}
