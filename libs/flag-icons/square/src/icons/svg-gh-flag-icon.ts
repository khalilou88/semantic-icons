import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gh-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gh"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#006b3f" d="M0 0h512v512H0z" />
      <path fill="#fcd116" d="M0 0h512v341.3H0z" />
      <path fill="#ce1126" d="M0 0h512v170.7H0z" />
      <path
        fill="#000001"
        d="m256 170.7 55.5 170.6L166.3 236h179.4L200.6 341.3z"
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
export class SvgGhFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
