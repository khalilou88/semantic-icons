import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-arrows-pointing-out-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z"
        clip-rule="evenodd"
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
export class SvgArrowsPointingOutIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
