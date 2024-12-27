import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mv"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#d21034" d="M0 0h640v480H0z" />
      <path fill="#007e3a" d="M120 120h400v240H120z" />
      <circle cx="350" cy="240" r="80" fill="#fff" />
      <circle cx="380" cy="240" r="80" fill="#007e3a" />
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
export class SvgMvFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
