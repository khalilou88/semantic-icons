import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-hu"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M640 480H0V0h640z" />
        <path fill="#388d00" d="M640 480H0V320h640z" />
        <path fill="#d43516" d="M640 160.1H0V.1h640z" />
      </g>
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHuFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
