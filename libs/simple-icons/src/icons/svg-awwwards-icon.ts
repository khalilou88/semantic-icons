import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-awwwards-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Awwwards</title>
      <path
        d="m14.72 5.6-2.24 8.68-2.12-8.68H7.47l-2.12 8.68L3.11 5.6H0l4.01 12.65h2.74l2.17-8.18 2.16 8.18h2.74L17.83 5.6zm5.1 10.7c0 1.2.9 2.1 2.09 2.1 1.2 0 2.09-.9 2.09-2.1s-.9-2.12-2.1-2.12c-1.19 0-2.08.9-2.08 2.11"
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
export class SvgAwwwardsIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
