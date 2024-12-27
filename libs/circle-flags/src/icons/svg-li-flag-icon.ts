import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-li-flag-icon',
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
        <path fill="#d80027" d="m0 256 255.2-39.6L512 256v256H0z" />
        <path fill="#0052b4" d="M0 0h512v256H0z" />
        <path
          fill="#ffda44"
          d="M189.2 178a33.4 33.4 0 0 0-55.6-24.8v-19.6h11.1v-22.3h-11.1v-11.1h-22.3v11.1h-11.1v22.3h11.1v19.6A33.4 33.4 0 0 0 66.8 203v19.6H178V203c6.8-6.1 11.1-15 11.1-25z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLiFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
