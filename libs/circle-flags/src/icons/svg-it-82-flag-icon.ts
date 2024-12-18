import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-82-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="513"
          height="513"
          x="-.5"
          y="-.5"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#d80027" d="m0 0 216.9 301.6L512 512V0H0Z" />
        <path fill="#ffda44" d="m0 0 512 512H0V0Z" />
        <path fill="none" d="M0 0h512v512H0z" />
        <path
          fill="#ff9811"
          d="M281.2 307.2a63.5 63.5 0 0 1-10.6-39.8c44-20.3 66.6-71 50.7-118L291 159.7a64 64 0 0 1-32.5 78 96.1 96.1 0 0 0-127.4 15l24 21.2a63.6 63.6 0 0 1 83.7-11 95.3 95.3 0 0 0 15.8 62 95.4 95.4 0 0 0 61 41l6.3-31.5a63.6 63.6 0 0 1-40.7-27.2Z"
        />
        <path
          fill="#eee"
          d="m403.4 160-37.8 33.7 21.6 94.4a29.8 29.8 0 0 1-39.6 34.6l-.6-.3-91-35-59.8 25.2-6.3 2.6 6.5 3.3 81.2 39.8-6 66-.1 2a5.7 5.7 0 1 1-11-3l-10-49.5-92.6-28.5a29.7 29.7 0 0 1-10.2-51.6l.5-.4L224 232l8.1-64.4.9-6.8-6.1 4-75 50.5L97.5 177l-1.5-1a5.7 5.7 0 1 1 8-8l48 16 71-65.9a29.7 29.7 0 0 1 49.7 17v.6L288 232l51.7 39.2 5.5 4.2-.5-7.3-6.1-90.3 60.2-27.9 1.7-.7a5.7 5.7 0 1 1 3 10.9Z"
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
export class SvgIt82FlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
