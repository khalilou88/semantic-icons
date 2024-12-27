import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bf-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bf"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#de0000" d="M512 511.6H.5V0H512z" />
        <path fill="#35a100" d="M511.8 512H0V256.2h511.7z" />
      </g>
      <path
        fill="#fff300"
        fill-rule="evenodd"
        d="m389 223.8-82.9 56.5 31.7 91.6-82.7-56.7-82.8 56.7 31.7-91.6-82.8-56.6 102.3.2 31.6-91.7 31.5 91.6"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBfFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
