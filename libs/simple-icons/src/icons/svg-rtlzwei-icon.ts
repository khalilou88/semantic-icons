import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rtlzwei-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RTLZWEI</title>
      <path
        d="M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0H0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0h-7.39zm-.003 6.49l-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076l-3.69.715v9.229l3.69-.717V7.566z"
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
export class SvgRtlzweiIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
