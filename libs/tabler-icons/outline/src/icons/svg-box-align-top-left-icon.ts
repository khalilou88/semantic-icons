import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-box-align-top-left-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top-left"
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
      <path
        d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z"
      />
      <path d="M15 4h-.01" />
      <path d="M20 4h-.01" />
      <path d="M20 9h-.01" />
      <path d="M20 15h-.01" />
      <path d="M4 15h-.01" />
      <path d="M20 20h-.01" />
      <path d="M15 20h-.01" />
      <path d="M9 20h-.01" />
      <path d="M4 20h-.01" />
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
export class SvgBoxAlignTopLeftIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
