import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-olympics-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#338af3"
          d="M109.6 153.1A71.8 71.8 0 0 0 38 224.7a71.8 71.8 0 0 0 71.6 71.6 71.8 71.8 0 0 0 71.6-71.6 71.8 71.8 0 0 0-71.6-71.6zm0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6-51.6-23-51.6-51.6 23-51.6 51.6-51.6z"
        />
        <path
          fill="#333"
          d="M256 153.1a71.8 71.8 0 0 0-71.6 71.6 71.8 71.8 0 0 0 71.6 71.6 71.8 71.8 0 0 0 71.6-71.6 71.8 71.8 0 0 0-71.6-71.6zm0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6-51.6-23-51.6-51.6 23-51.6 51.6-51.6z"
        />
        <path
          fill="#d80027"
          d="M402.4 153.1a71.8 71.8 0 0 0-71.6 71.6 71.8 71.8 0 0 0 71.6 71.6 71.8 71.8 0 0 0 71.6-71.6 71.8 71.8 0 0 0-71.6-71.6zm0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6-51.6-23-51.6-51.6 23-51.6 51.6-51.6z"
        />
        <path
          fill="#ffda44"
          d="M182.8 215.7a71.8 71.8 0 0 0-71.6 71.6 71.8 71.8 0 0 0 71.6 71.6 71.8 71.8 0 0 0 71.6-71.6 71.8 71.8 0 0 0-71.6-71.6zm0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6-51.6-23-51.6-51.6 23-51.6 51.6-51.6z"
        />
        <path
          fill="#6da544"
          d="M329.2 215.7a71.8 71.8 0 0 0-71.6 71.6 71.8 71.8 0 0 0 71.6 71.6 71.8 71.8 0 0 0 71.6-71.6 71.8 71.8 0 0 0-71.6-71.6zm0 20c28.6 0 51.6 23 51.6 51.6s-23 51.6-51.6 51.6-51.6-23-51.6-51.6 23-51.6 51.6-51.6z"
        />
        <path
          fill="#338af3"
          d="m166.9 181.7-16 12a51.5 51.5 0 0 1 0 61.9l16 12a71.6 71.6 0 0 0 0-85.9z"
        />
        <path
          fill="#333"
          d="m313.3 181.7-16 12a51.5 51.5 0 0 1 0 61.9l16 12a71.6 71.6 0 0 0 0-85.9zM225 266l-12 16a71.7 71.7 0 0 0 43 14.3v-20a51.5 51.5 0 0 1-31-10.3z"
        />
        <path
          fill="#d80027"
          d="m371.4 266-12 16a71.7 71.7 0 0 0 43 14.3v-20a51.5 51.5 0 0 1-31-10.3z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgOlympicsFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
