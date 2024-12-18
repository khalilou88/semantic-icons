import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-si-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-si"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="si-a">
          <path fill-opacity=".7" d="M60.2 0h497.3v497.3H60.2z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#si-a)"
        transform="translate(-62)scale(1.0295)"
      >
        <path fill="#fff" d="M0 0h994.7v497.3H0z" />
        <path fill="#d50000" d="M0 331.6h994.7v165.7H0z" />
        <path fill="#0000bf" d="M0 165.8h994.7v165.8H0z" />
        <path
          fill="#d50000"
          d="M282 90.3c-3.9 59.9-6.1 92.7-15.2 107.9-9.9 16.3-19.5 28.2-58 42.6-38.4-14.4-48-26.3-57.9-42.6-9-15.2-11.3-48-15.2-107.9l5.7-1.9c11.4-3.5 20-6.3 26.3-7.5 9-2 16.7-4.1 41-4.6 24.3.4 32 2.7 41 4.6 6.4 1.3 15.3 4 26.6 7.5z"
        />
        <path
          fill="#0000bf"
          d="M276.4 88.3c-3.7 59.8-6.7 87.2-11.6 100.3-9.3 22.6-24.1 35-56 46.7-31.8-11.8-46.6-24.1-56-46.7-4.8-13.1-7.9-40.4-11.4-100.3 11.2-3.5 20-6.2 26.3-7.5 9-1.9 16.7-4.2 41-4.6 24.3.4 32.1 2.7 41.1 4.6 6.4 1.3 15.3 4 26.6 7.5"
        />
        <path
          fill="#ffdf00"
          d="m208.8 106.6 1.5 3.7 6.7.9-4.3 2.6 4.2 2.8-6.1 1-1.9 3.3-2-3.4-6-.8 4-2.9-4-2.6 6.4-1z"
        />
        <path
          fill="#fff"
          d="m262.5 174.5-3.7-3-2.7-4.4-5.2-4.6-2.8-4.6-5.2-4.7-2.6-4.6-2.8-2.3-1.9-1.7-4.7 4.1-2.6 4.6-3.3 2.9-3.5-2.8-2.7-4.7-10-17.7-10 17.7-2.6 4.7-3.6 2.8-3.2-3-2.6-4.5-4.7-4.1-1.9 1.7-2.8 2.3-2.6 4.6-5.2 4.7-2.8 4.6-5.3 4.6-2.6 4.4-3.7 3a64 64 0 0 0 18 35.2c6.4 6.1 19.5 14.4 35.5 19.9a101 101 0 0 0 35.7-20 64 64 0 0 0 18.1-35.1"
        />
        <path
          fill="#ffdf00"
          d="m224.8 81.5 1.5 3.6 6.7 1-4.3 2.5 4.2 2.9-6.1 1-1.9 3.3-2-3.4-5.9-.8 4-3-4.1-2.5 6.4-1zm-32 0 1.5 3.5 6.7 1-4.3 2.6 4.2 2.8-6.1 1-1.9 3.3-2.1-3.4-5.8-.8 4-2.9-4.1-2.6 6.4-1 1.5-3.6z"
        />
        <path
          fill="#0000bf"
          d="M254.2 197.2H247l-6.7-.5-8.1-4-9.2.1-7.9 3.9-6.2.5-6.3-.5-7.9-3.9h-9.1l-8.1 4-6.7.4h-7.4l-3.5-6 .1-.2 10.9 1.8 6.6-.5 8.1-4h9.2l8 4 6.2.5 6.2-.6 8-3.8h9l8.2 3.9 6.7.5 10.5-1.9.2.3zm-84 9.3 7.2-.5 8.1-4h9.1l8 3.9 6.2.6 6.2-.6 8-3.9h9.1l8.1 4 7.3.5 4.7-5.8-.2-.2-5 1.5-6.7-.5-8.1-4h-9.1l-8 4-6.2.5-6.2-.5-8-4h-9.1l-8.1 4-6.7.5-5-1.2v.2z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSiFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
