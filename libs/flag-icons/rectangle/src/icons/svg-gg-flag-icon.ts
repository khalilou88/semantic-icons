import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gg"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#e8112d" d="M256 0h128v480H256z" />
      <path fill="#e8112d" d="M0 176h640v128H0z" />
      <path
        id="gg-a"
        fill="#f9dd16"
        d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="rotate(90 320 240)"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="rotate(-90 320 240)"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="rotate(180 320 240)"
      />
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
export class SvgGgFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
