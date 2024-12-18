import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-ri-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#0052b4"
          d="M204 296v16h-40v32h40v-16h104v16h40v-32h-40v-16z"
        />
        <path
          fill="#ffda44"
          d="m236 107 52-38h-64l52 38-20-61zm170 129 37 52v-64l-37 52 61-20zM276 406l-52 37h64l-52-37 20 61zM107 276l-38-52v64l38-52-61 20zm206-159 64-7-55-32 26 59 13-63zm83 196 6 64 32-55-59 26 63 13zm-197 83-64 6 55 32-26-59-13 63zm-82-197-7-64-32 55 59-26-63-13Zm259-35 58 26-32-55-7 64 43-48zm-28 212-26 58 55-32-64-7 48 43zm-211-28-59-26 32 55 6-64-42 48zm27-211 26-59-55 32 64 6-48-42zm92-3a24 24 0 0 0-24 24 24 24 0 0 0 16 23v17h-16v16h16v39c-20-2-30-15-33-18l11-11h-32v32l10-10a68 68 0 0 0 104 0l10 10v-32h-32l11 11c-3 3-13 16-33 18v-39h16v-16h-16v-17a24 24 0 0 0 16-23 24 24 0 0 0-24-24zm0 16a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z"
        />
      </g>
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
export class SvgUsRiFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
