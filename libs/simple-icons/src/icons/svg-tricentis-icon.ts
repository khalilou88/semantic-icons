import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tricentis-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tricentis</title>
      <path
        d="M14.271 10.42 6.86 3.006 9.833.034l4.438 4.438L18.742 0l2.974 2.974ZM9.825 24l-2.973-2.974 7.445-7.445 7.412 7.412-2.974 2.973-4.438-4.437zm-4.567-4.568-2.974-2.974 4.47-4.47-4.437-4.439 2.974-2.974 7.412 7.412Z"
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
export class SvgTricentisIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
