import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-stripe-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-stripe"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12.5 2c2.45 0 4.543 .44 5.928 1.096a1 1 0 0 1 .564 1.028l-.5 4a1 1 0 0 1 -1.429 .776c-1.047 -.509 -2.618 -.823 -4.168 -.823q -.206 .001 -.332 .026l.028 .024l.07 .047c.314 .207 .832 .437 1.672 .746c3.824 1.351 5.667 3.24 5.667 6.58c0 2.13 -.758 3.732 -2.295 4.924c-1.293 1.023 -3.422 1.576 -5.705 1.576c-2.4 0 -4.72 -.644 -6.486 -1.626a1 1 0 0 1 -.506 -.998l.5 -4a1 1 0 0 1 1.494 -.741c1.292 .75 3.64 1.365 4.998 1.365c.39 0 .704 -.147 .87 -.295l.035 -.035l-.09 -.035c-.167 -.06 -1.583 -.493 -2.153 -.694c-3.626 -1.304 -5.662 -3.609 -5.662 -6.941c0 -1.887 .882 -3.563 2.37 -4.777c1.22 -.987 2.517 -1.223 5.13 -1.223"
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
export class SvgBrandStripeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
