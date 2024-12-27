import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-et-ha-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="M0 0h512v64l-32 48 32 48v192l-32 48 32 48v64H0v-64l32-48-32-48V160l32-48L0 64Z"
        />
        <path fill="#d80027" d="M0 64h512v96H0z" />
        <path fill="#6da544" d="M0 352h512v96H0z" />
        <circle cx="256" cy="256" r="72" fill="#338af3" />
      </g>
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
export class SvgEtHaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
