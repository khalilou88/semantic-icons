import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-adjustments-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-off"
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
      <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M6 6v2" />
      <path d="M6 12v8" />
      <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 4v4m0 4v2" />
      <path d="M12 18v2" />
      <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M18 4v1" />
      <path d="M18 9v5m0 4v2" />
      <path d="M3 3l18 18" />
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
export class SvgAdjustmentsOffIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
