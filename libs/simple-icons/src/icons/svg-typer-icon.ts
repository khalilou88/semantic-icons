import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-typer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Typer</title>
      <path
        d="M21.818 3.646H2.182C.982 3.646 0 4.483 0 5.505v3.707h2.182V5.486h19.636v13.036H2.182v-3.735H0v3.726c0 1.022.982 1.84 2.182 1.84h19.636c1.2 0 2.182-.818 2.182-1.84V5.505c0-1.032-.982-1.859-2.182-1.859Zm-10.909 12.07L15.273 12l-4.364-3.717v2.787H0v1.859h10.909v2.787Z"
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
export class SvgTyperIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
