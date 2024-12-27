import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-do-flag-icon',
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
          fill="#d80027"
          d="M35.5 256h444l32.5-66.8V0H322.8L256 31.8v444.6L189.2 512H0V322.8z"
        />
        <path
          fill="#0052b4"
          d="M479.5 256h-444L0 189.2V0h189.2L256 31.8v444.6l66.8 35.6H512V322.8z"
        />
        <path
          fill="#eee"
          d="M189.2 0h133.6v189.2H512v133.6H322.8V512H189.2V322.8H0V189.2h189.2z"
        />
        <path
          fill="#496e2d"
          d="M322.8 256a66.8 66.8 0 1 1-133.6 0c0-36.9 66.8-66.8 66.8-66.8s66.8 30 66.8 66.8z"
        />
        <path fill="#0052b4" d="M189.2 256a66.8 66.8 0 1 1 133.6 0" />
        <path
          fill="#d80027"
          d="M218.4 222.6v41.7a37.6 37.6 0 1 0 75.2 0v-41.7z"
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
export class SvgDoFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
