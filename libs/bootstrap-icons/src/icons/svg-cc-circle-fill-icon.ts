import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cc-circle-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-cc-circle-fill"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c.681 0 1.138.47 1.187 1.107h1.147v-.11c-.053-1.187-1.024-2-2.343-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.906 2.73 2.518 2.73 1.314 0 2.285-.792 2.343-1.939v-.114H6.595c-.049.615-.497 1.05-1.187 1.05-.84 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754Zm5.404 0c.68 0 1.138.47 1.186 1.107h1.147v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.742c0-1.112.488-1.754 1.319-1.754Z"
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
export class SvgCcCircleFillIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
