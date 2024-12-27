import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coggle-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Coggle</title>
      <path
        d="M3.684 0A3.683 3.683 0 0 0 0 3.684v10.92c2.052-.535 3.606-1.577 5.158-3.13h7.367v7.368c-1.88 1.88-5.438 4.598-8.052 5.158h15.843A3.683 3.683 0 0 0 24 20.316V8.881c-1.544.537-3.087 1.575-4.63 3.119l-4.74 4.736V9.37H7.265l3.683-3.685c2.35-2.35 5.96-5.119 8.58-5.684H3.684z"
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
export class SvgCoggleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
