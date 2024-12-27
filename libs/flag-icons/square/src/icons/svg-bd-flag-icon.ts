import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bd-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bd"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#006a4e" d="M0 0h512v512H0z" />
      <circle cx="230" cy="256" r="170.7" fill="#f42a41" />
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
export class SvgBdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
