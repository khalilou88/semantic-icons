import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sc"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0Z" />
      <path fill="#d92223" d="M0 512V0h512v170.7z" />
      <path fill="#fcd955" d="M0 512V0h341.3z" />
      <path fill="#003d88" d="M0 512V0h170.7z" />
      <path fill="#007a39" d="m0 512 512-170.7V512Z" />
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
export class SvgScFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
