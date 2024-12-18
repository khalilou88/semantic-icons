import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-drone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-drone"
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
      <path d="M10 10h4v4h-4z" />
      <path d="M10 10l-3.5 -3.5" />
      <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
      <path d="M14 10l3.5 -3.5" />
      <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
      <path d="M14 14l3.5 3.5" />
      <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
      <path d="M10 14l-3.5 3.5" />
      <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
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
export class SvgDroneIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
