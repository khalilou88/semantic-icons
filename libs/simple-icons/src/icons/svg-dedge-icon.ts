import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dedge-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>D-EDGE</title>
      <path
        d="M19.986 0v8.338C16.09 2.93 7.61 2.8 3.74 8.733-.523 15.27 4.191 23.99 11.996 24h.001c5.447-.003 9.872-4.43 9.87-9.877V0Zm-7.99 6.14a8.004 8.004 0 0 1 7.99 7.988 7.986 7.986 0 0 1-4.93 7.381 7.986 7.986 0 0 1-8.707-1.73 7.985 7.985 0 0 1-1.733-8.707 7.986 7.986 0 0 1 7.38-4.932Z"
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
export class SvgDedgeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
