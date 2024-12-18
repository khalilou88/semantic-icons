import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>KX</title>
      <path
        d="M0 5.873h3.59v12.254H0V5.873Zm11.746 0L7.65 12l4.097 6.127H7.65L3.59 12l4.06-6.127h4.097Zm12.254 0L19.903 12 24 18.127h-4.097l-2.03-3.045-2.03 3.045h-4.097L15.843 12l-4.097-6.127h4.097l2.03 3.082 2.03-3.082H24Z"
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
export class SvgKxIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
