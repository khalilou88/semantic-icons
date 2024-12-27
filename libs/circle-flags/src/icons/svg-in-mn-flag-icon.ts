import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-in-mn-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v73L256 96 0 73Z" />
        <path fill="#eee" d="M0 73h512v73l-256 23L0 146Z" />
        <path fill="#333" d="M0 146h512v73l-256 23L0 219Z" />
        <path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z" />
        <path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z" />
        <path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z" />
        <path fill="#6da544" d="M0 439h512v73H0z" />
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
export class SvgInMnFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
