import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nl-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-nl"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#ae1c28" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#21468b" d="M0 341.3h512V512H0z" />
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
export class SvgNlFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
