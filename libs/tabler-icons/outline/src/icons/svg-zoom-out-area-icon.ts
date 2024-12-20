import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-zoom-out-area-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-out-area"
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
      <path d="M13 15h4" />
      <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M22 22l-3 -3" />
      <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
      <path d="M3 11v-1" />
      <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
      <path d="M10 3h1" />
      <path d="M15 3h1a2 2 0 0 1 2 2v1" />
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
export class SvgZoomOutAreaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
