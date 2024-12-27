import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nike-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.24287 8.375C4.07502 9.70918 2.4578 11.2029 2.06964 13.0667C1.45778 16.0046 5.03179 15.9253 6.76653 15.2083C11.8723 13.0979 16.9222 10.8549 22 8.67826C17.0628 9.99324 12.1433 11.3766 7.18823 12.6232C3.64341 13.5151 4.33326 10.3512 5.24287 8.375Z"
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
export class SvgNikeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
