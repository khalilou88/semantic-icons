import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#ffda44"
          d="M378.5 0H133.7l-22.3 256 22.3 256h244.8l22.3-256z"
        />
        <path fill="#338af3" d="M133.7 512V0H0v512z" />
        <path
          fill="#6da544"
          d="M512 0H378.5v512H512zM200.4 322.8 156 256l44.5-66.8 44.7 66.8zm111.4 0L267.1 256l44.6-66.8 44.5 66.8zm-55.7 89L211.6 345l44.5-66.7 44.5 66.7z"
        />
      </g>
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
export class SvgVcFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
