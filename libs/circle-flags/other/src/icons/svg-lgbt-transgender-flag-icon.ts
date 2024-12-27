import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lgbt-transgender-flag-icon',
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
        <path fill="#338af3" d="m0 410 256-32 256 32v102H0Z" />
        <path fill="#f5a9b8" d="m0 308 256-32 256 32v102H0Z" />
        <path fill="#eee" d="m0 204 256-32 256 32v104H0Z" />
        <path fill="#f5a9b8" d="m0 102 256-32 256 32v102H0Z" />
        <path fill="#338af3" d="M0 0h512v102H0z" />
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
export class SvgLgbtTransgenderFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
