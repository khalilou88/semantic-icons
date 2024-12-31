import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-77-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
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
        <path fill="#0052b4" d="M0 0h512v512H0V0Z" />
        <path
          fill="#eee"
          d="M144 152v141c0 85.6 112 111.4 112 111.4S368 378.7 368 293V152H144Z"
        />
        <path
          fill="#0052b4"
          d="M330.7 224c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Z"
        />
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
export class SvgIt77FlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
