import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mv"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#d21034" d="M0 0h512v512H0z" />
      <path fill="#007e3a" d="M128 128h256v256H128z" />
      <circle cx="288" cy="256" r="85.3" fill="#fff" />
      <ellipse cx="308.6" cy="256" fill="#007e3a" rx="73.9" ry="85.3" />
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
export class SvgMvFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
