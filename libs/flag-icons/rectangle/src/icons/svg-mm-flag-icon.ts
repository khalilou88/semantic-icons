import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#fecb00" d="M0 0h640v480H0z" />
      <path fill="#34b233" d="M0 160h640v320H0z" />
      <path fill="#ea2839" d="M0 320h640v160H0z" />
      <g transform="translate(320 256.9)scale(176.87999)">
        <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z" />
        <use
          xlink:href="#mm-a"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlink:href="#mm-a"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
        <use
          xlink:href="#mm-a"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#mm-a"
          width="100%"
          height="100%"
          transform="rotate(144)"
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
export class SvgMmFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
