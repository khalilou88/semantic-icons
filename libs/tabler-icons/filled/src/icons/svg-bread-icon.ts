import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bread-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-bread"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18 3a4 4 0 0 1 3.109 6.516l-.11 .126l.001 8.358a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -3 -3v-8.356l-.116 -.136a4 4 0 0 1 -.728 -3.616l.067 -.21c.532 -1.525 1.93 -2.58 3.601 -2.677l12.079 .001z"
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
export class SvgBreadIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
