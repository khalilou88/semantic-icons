import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-badges-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-badges"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z"
      />
      <path
        d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z"
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
export class SvgBadgesIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
