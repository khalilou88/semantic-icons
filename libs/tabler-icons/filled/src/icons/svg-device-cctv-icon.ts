import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-cctv-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-device-cctv"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 8v6a8 8 0 1 1 -16 0v-6zm-8 2a4 4 0 0 0 -3.996 3.826l-.004 .174a4 4 0 1 0 4 -4m.01 3a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-10.01 -8v-1a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2"
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
export class SvgDeviceCctvIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
