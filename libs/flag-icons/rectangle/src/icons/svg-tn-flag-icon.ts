import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-tn"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#e70013" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="M320 119.2a1 1 0 0 0-1 240.3 1 1 0 0 0 1-240.3M392 293a90 90 0 1 1 0-107 72 72 0 1 0 0 107m-4.7-21.7-37.4-12.1-23.1 31.8v-39.3l-37.4-12.2 37.4-12.2V188l23.1 31.8 37.4-12.1-23.1 31.8z"
      />
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
export class SvgTnFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
