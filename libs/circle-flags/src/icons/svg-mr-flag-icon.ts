import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#496e2d" d="M0 0h512v512H0z" />
        <g fill="#ffda44">
          <path
            d="M256 295.8a89 89 0 0 1-87-70 89.4 89.4 0 0 0-2 19 89 89 0 1 0 178 0 89.4 89.4 0 0 0-2-19 89 89 0 0 1-87 70z"
          />
          <path
            d="m256 178 8.3 25.6H291l-21.7 15.8 8.3 25.5L256 229l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
          />
        </g>
      </g>
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
export class SvgMrFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
