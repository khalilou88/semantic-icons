import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-packages-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-packages"
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
      <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M2 13.5v5.5l5 3" />
      <path d="M7 16.545l5 -3.03" />
      <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M12 19l5 3" />
      <path d="M17 16.5l5 -3" />
      <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
      <path d="M7 5.03v5.455" />
      <path d="M12 8l5 -3" />
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
export class SvgPackagesIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
