import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-xx-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-xx"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#adb5bd"
        d="M.5.5h511v511H.5z"
      />
      <path fill="none" stroke="#adb5bd" d="m.5.5 511 511m0-511-511 511" />
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
export class SvgXxFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
