import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ro-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ro"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#00319c" d="M0 0h213.3v480H0z" />
        <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#de2110" d="M426.7 0H640v480H426.7z" />
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
export class SvgRoFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
