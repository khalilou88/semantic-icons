import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tax-pound-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-tax-pound"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224"
      />
      <path d="M15 3q -1 4 -3 4t -3 -4z" />
      <path d="M14 11h-1a2 2 0 0 0 -2 2v2c0 1.105 -.395 2 -1.5 2h4.5" />
      <path d="M10 14h3" />
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
export class SvgTaxPoundIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
