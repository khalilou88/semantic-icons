import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nato-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="m365.9 273.9 46-17.9-46-17.9-25.3-9.8-41-16-16-41a89.4 89.4 0 0 1 57 57l25.3 9.8a112 112 0 0 0-92-92l-17.9-46-17.9 46a112 112 0 0 0-92 92l-46 17.9 46 17.9a112 112 0 0 0 92 92l17.9 46 17.9-46a112 112 0 0 0 92-92zm-83.5-44.3L256 256h94.4l-68 26.4L256 256v94.4l-26.4-68L256 256h-94.4l68-26.4L256 256v-94.4zm-54-58.2-16 41-41 16a89.4 89.4 0 0 1 57-57zm-57 112.3 41 16 16 41a89.4 89.4 0 0 1-57-57zm112.3 57 16-41 41-16a89.4 89.4 0 0 1-57 57z"
        />
        <path
          fill="#0052b4"
          d="M350.4 256H256l26.4 26.4zm-188.8 0H256l-26.4-26.4zm94.4 94.4V256l-26.4 26.4zm0-94.4 26.4-26.4-26.4-68z"
        />
        <path
          fill="#eee"
          d="M244.9 33.4H267v44.5h-22zM33.4 244.9h44.5V267H33.4zM244.9 434H267v44.5h-22zM434 244.9h44.5V267H434z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNatoFlagIcon {
  readonly class = input<string>('');
}
