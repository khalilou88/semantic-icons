import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-refine-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Refine</title>
      <path
        d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z"
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
export class SvgRefineIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
