import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-candle-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-candle"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10a2 2 0 0 1 2 -2z"
      />
      <path
        d="M11.254 1.334a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1 -4.196 4.28c-1.195 -1.07 -1.339 -2.889 -.297 -4.166z"
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
export class SvgCandleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
