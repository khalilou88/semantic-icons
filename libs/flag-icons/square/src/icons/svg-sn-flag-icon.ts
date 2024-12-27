import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sn"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#0b7226" d="M0 0h170.7v512H0z" />
        <path fill="#ff0" d="M170.7 0h170.6v512H170.7z" />
        <path fill="#bc0000" d="M341.3 0H512v512H341.3z" />
      </g>
      <path
        fill="#0b7226"
        d="m197 351.7 22-71.7-60.4-46.5h74.5l24.2-76 22.1 76H356L295.6 280l22.1 74-60.3-46.5z"
      />
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
export class SvgSnFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
