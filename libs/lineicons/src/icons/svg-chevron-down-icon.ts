import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-chevron-down-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z"
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
export class SvgChevronDownIcon {
  readonly class = input<string>('');
}
