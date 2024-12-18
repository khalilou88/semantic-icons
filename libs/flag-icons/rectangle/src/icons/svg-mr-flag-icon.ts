import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mr"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#cd2a3e" d="M0 0h640v480H0z" />
      <path fill="#006233" d="M0 72h640v336H0z" />
      <path
        class="mr-st1"
        fill="#ffc400"
        d="M470 154.6a150 150 0 0 1-300 0 154.9 154.9 0 0 0-5 39.2 155 155 0 1 0 310 0 154.4 154.4 0 0 0-5-39.2"
      />
      <path
        fill="#ffc400"
        d="m320 93.8-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMrFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
