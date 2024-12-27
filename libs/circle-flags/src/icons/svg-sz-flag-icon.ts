import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sz-flag-icon',
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
          fill="#ffda44"
          d="m0 144.7 256-20.5 256 20.5V178l-37.4 79 37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"
        />
        <path fill="#333" d="M0 0h512v144.7H0z" />
        <path fill="#0052b4" d="M0 367.3h512V512H0z" />
        <path fill="#a2001d" d="M0 178h512v156H0z" />
        <path
          fill="#ffda44"
          d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"
        />
        <path
          fill="#eee"
          d="m256.2 189.2-18 65.2 18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8z"
        />
        <path
          fill="#333"
          d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"
        />
        <path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z" />
        <path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z" />
        <g fill="#0052b4" transform="translate(.2)">
          <circle cx="89" cy="256" r="22.3" />
          <circle cx="423" cy="256" r="22.3" />
        </g>
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
export class SvgSzFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
