import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gift-top-icon',
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
        d="M7.25 2H3.5A1.5 1.5 0 0 0 2 3.5v3.75h1.718A2.5 2.5 0 0 1 7.25 3.716V2ZM2 8.75v3.75A1.5 1.5 0 0 0 3.5 14h3.75v-3.085a4.743 4.743 0 0 1-3.455 1.826.75.75 0 1 1-.092-1.497 3.252 3.252 0 0 0 2.96-2.494H2ZM8.75 14h3.75a1.5 1.5 0 0 0 1.5-1.5V8.75H9.337a3.252 3.252 0 0 0 2.96 2.494.75.75 0 1 1-.093 1.497 4.743 4.743 0 0 1-3.454-1.826V14ZM14 7.25h-1.718A2.5 2.5 0 0 0 8.75 3.717V2h3.75A1.5 1.5 0 0 1 14 3.5v3.75Z"
      />
      <path
        d="M6.352 6.787c.16.012.312.014.448.012.002-.136 0-.289-.012-.448-.043-.617-.203-1.181-.525-1.503a1 1 0 0 0-1.414 1.414c.322.322.886.482 1.503.525ZM9.649 6.787c-.16.012-.312.014-.448.012-.003-.136 0-.289.011-.448.044-.617.203-1.181.526-1.503a1 1 0 1 1 1.414 1.414c-.322.322-.887.482-1.503.525Z"
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
export class SvgGiftTopIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
