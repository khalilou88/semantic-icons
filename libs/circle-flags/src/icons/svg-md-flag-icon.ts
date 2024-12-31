import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-md-flag-icon',
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
        <path fill="#0052b4" d="M0 0h144.7l36 254.6-36 257.4H0z" />
        <path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z" />
        <path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
        <path
          fill="#ff9811"
          d="M345.1 201.4H284a27.8 27.8 0 1 0-55.6 0h-61.2a28.2 28.2 0 0 0 28.3 27.4h-1a27.4 27.4 0 0 0 27.5 27.4c0 13.4 9.6 24.5 22.3 27l-21.6 48.7a88.8 88.8 0 0 0 33.5 6.5 88.8 88.8 0 0 0 33.5-6.5L268.1 283a27.4 27.4 0 0 0 22.3-26.9 27.4 27.4 0 0 0 27.4-27.4h-.9a28.2 28.2 0 0 0 28.3-27.4z"
        />
        <path
          fill="#0052b4"
          d="M256.1 239.3 220 256v33.4l36.2 22.3 36.2-22.3V256z"
        />
        <path fill="#d80027" d="M220 222.6h72.3V256H220z" />
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
export class SvgMdFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
