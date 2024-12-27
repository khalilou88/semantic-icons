import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-lv"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
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
export class SvgLvFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
