import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-minus-icon',
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
        d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18.0007C18.4149 11.25 18.7507 11.5858 18.7507 12C18.7507 12.4142 18.4149 12.75 18.0007 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMinusIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
