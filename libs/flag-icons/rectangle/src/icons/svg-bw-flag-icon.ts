import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bw-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bw"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#00cbff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#000001" d="M0 186h640v108H0z" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBwFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
