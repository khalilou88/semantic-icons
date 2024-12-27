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
      viewBox="0 0 640 480"
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#adb5bd"
        stroke-width="1.1"
        d="M.5.5h638.9v478.9H.5z"
      />
      <path
        fill="none"
        stroke="#adb5bd"
        stroke-width="1.1"
        d="m.5.5 639 479m0-479-639 479"
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
export class SvgXxFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
