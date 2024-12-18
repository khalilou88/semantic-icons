import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tasmota-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tasmota</title>
      <path
        d="M12 0L0 12l1.371 1.372L12 2.743l10.629 10.629L24 12 12 0zm0 8.463a7.41 7.41 0 0 0-2.64 14.334v-2.133a5.464 5.464 0 0 1 1.671-10.17V24h1.94V10.494a5.464 5.464 0 0 1 1.669 10.171v2.133A7.41 7.41 0 0 0 12 8.463z"
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
export class SvgTasmotaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
