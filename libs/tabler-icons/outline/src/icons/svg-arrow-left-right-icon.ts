import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-arrow-left-right-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-right"
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
      <path d="M17 13l4 -4l-4 -4" />
      <path d="M7 13l-4 -4l4 -4" />
      <path d="M12 14a5 5 0 0 1 5 -5h4" />
      <path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
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
export class SvgArrowLeftRightIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
