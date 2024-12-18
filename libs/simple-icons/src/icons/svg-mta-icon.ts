import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mta-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MTA</title>
      <path
        d="M15.171 10.07l-1.293-.109v6.861l-1.926.34-.004-7.371-1.637-.145V6.944l4.86.85zm3.668 5.884l-1.142.198-.134-1-1.113.145-.14 1.1-1.473.26 1.458-8.651 1.385.24zm-1.48-2.492l-.305-2.642h-.068l-.31 2.682zM10.991 24c6.59 0 11.932-5.373 11.932-12 0-6.628-5.342-12-11.932-12C6.86 0 3.22 2.112 1.077 5.323l3.307.583.91 6.965c.003-.012.066-.004.066-.004l.998-6.615 3.309.58v10.735l-2.089.367V13.32s.078-1.987.032-2.327c0 0-.09.002-.092-.005l-1.246 7.18-2.075.366L2.672 10.8l-.092-.007c-.032.28.112 2.707.112 2.707v5.298l-1.364.24C3.498 22.044 7.016 24 10.991 24z"
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
export class SvgMtaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
