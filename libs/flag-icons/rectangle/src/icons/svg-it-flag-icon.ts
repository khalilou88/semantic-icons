import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-it"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#009246" d="M0 0h213.3v480H0z" />
        <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
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
export class SvgItFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
