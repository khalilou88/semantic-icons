import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mu-flag-icon',
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
        <path fill="#6da544" d="m0 378.3 254-37.1 258 37V512H0z" />
        <path fill="#ffda44" d="m0 256.1 252.2-33.3L512 256v122.4H0z" />
        <path fill="#0052b4" d="M0 133.7 249.7 97 512 133.7v122.4H0z" />
        <path fill="#d80027" d="M0 0h512v133.7H0z" />
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
export class SvgMuFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
