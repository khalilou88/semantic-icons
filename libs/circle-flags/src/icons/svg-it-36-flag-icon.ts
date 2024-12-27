import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-36-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="512"
          height="512"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#338af3" d="M0 0h512v512H0V0Z" />
        <path
          fill="#eee"
          d="M304 344v16h-32v-16h-32v16h-32v-16h-32v64h160v-64h-32z"
        />
        <path
          fill="#333"
          d="M248 352h-2.3l24-24-5.7-5.7-29.7 29.7H224a8 8 0 0 0-8 8h10.3a8 8 0 0 0 0 11.3l11.4-11.3H256a8 8 0 0 0-8-8Zm56 8a8 8 0 0 0-8-8h-8v-24h-8v24h-8a8 8 0 0 0-8 8h18.3l11.4 11.3a8 8 0 0 0 0-11.3H304Z"
        />
        <path
          fill="#ffda44"
          d="M304 256a24 24 0 0 0 24-24 24 24 0 0 0 24-24 24 24 0 0 0 24-24h-80c-9 0-17.3 3-24 8v-8a24 24 0 0 0-24-24 24 24 0 0 0-24-24 24 24 0 0 0-24-24v80a40 40 0 0 0 4.5 18.5A84.2 84.2 0 0 0 184 208a32 32 0 0 0-32 32c9.4-5.5 20.3-8 32-8l72 80a24 24 0 1 0 48 0l16-16 40 40a16 16 0 0 0 16-16 16 16 0 0 0 16-16l-88-48Z"
        />
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIt36FlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
