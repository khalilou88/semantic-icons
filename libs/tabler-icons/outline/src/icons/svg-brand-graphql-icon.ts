import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-graphql-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-graphql"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l8 -5l8 5v8l-8 5l-8 -5z" />
      <path d="M12 4l7.5 12h-15z" />
      <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
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
export class SvgBrandGraphqlIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
