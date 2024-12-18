import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mk-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mk"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#d20000" d="M0 0h512v512H0z" />
      <path
        fill="#ffe600"
        d="M0 0h86.8L256 246.9 425.2 0H512L0 512h86.8L256 265.1 425.2 512H512zm512 204.8v102.4L0 204.8v102.4zM204.8 0 256 219.4 307.2 0zm0 512L256 292.6 307.2 512z"
      />
      <circle
        cx="256"
        cy="256"
        r="82.3"
        fill="#ffe600"
        stroke="#d20000"
        stroke-width="18.3"
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
export class SvgMkFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
