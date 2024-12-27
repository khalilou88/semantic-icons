import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-googlechronicle-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google Chronicle</title>
      <path
        d="m2.719 4.812 4.812 3v4l-4.812 3Zm0 10 4.812-3v9.375l-3.914-2.389a1.875 1.875 0 0 1-.898-1.6ZM2.719 0h18.562v4.812H2.719Zm4.812 21.188 13.75-8.594v4.618c0 .626-.323 1.208-.854 1.539L12 24Z"
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
export class SvgGooglechronicleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
