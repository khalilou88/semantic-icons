import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-eraser-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Eraser</title>
      <path
        d="M4.186 7.328c-.248 0-.482.168-.608.443l-3.476 7.51c-.283.61.057 1.39.605 1.39h10.682V7.329zm8.425 0-.002 9.344h7.205c.248 0 .482-.168.608-.443l3.476-7.51c.283-.61-.057-1.39-.605-1.39Z"
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
export class SvgEraserIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
