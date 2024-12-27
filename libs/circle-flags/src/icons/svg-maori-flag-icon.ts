import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-maori-flag-icon',
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
          fill="#eee"
          d="m0 68.6 247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"
        />
        <path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z" />
        <path
          fill="#d80027"
          d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8 47 47 0 0 1 0 93.9 68.3 68.3 0 0 0 0-136.5z"
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
export class SvgMaoriFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
