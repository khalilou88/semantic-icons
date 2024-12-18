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
      [class]="_svgClass()"
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
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgXxFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
