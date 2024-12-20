import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-es-ct-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-es-ct"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fcdd09" d="M0 0h640v480H0z" />
      <path
        stroke="#da121a"
        stroke-width="60"
        d="M0 90h810m0 120H0m0 120h810m0 120H0"
        transform="scale(.79012 .88889)"
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
export class SvgEsCtFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
