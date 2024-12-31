import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-lv"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#981e32" d="M0 0h512v204.8H0zm0 307.2h512V512H0z" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLvFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
