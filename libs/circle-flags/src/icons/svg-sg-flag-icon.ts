import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sg-flag-icon',
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
        <path fill="#eee" d="m0 256 257.7-51L512 256v256H0z" />
        <path fill="#d80027" d="M0 0h512v256H0z" />
        <g fill="#eee">
          <path
            d="M155.8 133.6A78 78 0 0 1 217 57.5a78.2 78.2 0 0 0-16.7-1.8 78 78 0 1 0 16.7 154 78 78 0 0 1-61.2-76.1zM256 61.2l5.5 17h18l-14.6 10.5 5.6 17L256 95.2l-14.5 10.5 5.6-17-14.5-10.5h17.9z"
          />
          <path
            d="m212.6 94.6 5.6 17H236l-14.4 10.5 5.5 17-14.5-10.5-14.4 10.5 5.5-17-14.5-10.5h17.9zm86.8 0 5.5 17h17.9l-14.5 10.5 5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zm-16.7 50.1 5.5 17h17.9l-14.5 10.5 5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.9zm-53.4 0 5.5 17h18l-14.5 10.5 5.5 17-14.5-10.5-14.4 10.5 5.5-17-14.5-10.5h17.9z"
          />
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSgFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
