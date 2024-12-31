import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mg"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fc3d32" d="M213.3 0H640v240H213.3z" />
        <path fill="#007e3a" d="M213.3 240H640v240H213.3z" />
        <path fill="#fff" d="M0 0h213.3v480H0z" />
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
export class SvgMgFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
