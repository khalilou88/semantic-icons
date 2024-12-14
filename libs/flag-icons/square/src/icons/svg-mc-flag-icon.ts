import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mc"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#f31830" d="M0 0h512v256H0z" />
        <path fill="#fff" d="M0 256h512v256H0z" />
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
export class SvgMcFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
