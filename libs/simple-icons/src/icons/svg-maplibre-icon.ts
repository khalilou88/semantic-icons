import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-maplibre-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MapLibre</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 3.19c2.937 0 5.371 2.265 5.371 5.035 0 4.111-4.364 7.635-5.035 8.138-.084 0-.084.084-.084.084-.084.084-.168.084-.168.084s-.168 0-.168-.084l-.084-.084c-.84-.503-5.203-3.943-5.203-8.138 0-2.77 2.434-5.036 5.371-5.036zm0 2.601c-1.427 0-2.602 1.173-2.602 2.684 0 1.51 1.175 2.685 2.602 2.685 1.427 0 2.602-1.175 2.602-2.685S13.427 5.79 12 5.79zM8.979 17.287h6.042a.66.66 0 0 1 .67.672v2.014a.66.66 0 0 1-.67.67H8.98a.66.66 0 0 1-.67-.67v-2.014a.66.66 0 0 1 .67-.672zm.755 1.258v.924h4.448v-.924H9.734z"
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
export class SvgMaplibreIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
