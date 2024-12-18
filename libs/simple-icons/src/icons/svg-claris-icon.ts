import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-claris-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Claris</title>
      <path
        d="M11.56 0a3.34 3.34 0 00-.57.043L22.947 12 10.99 23.957c.132.022.307.043.57.043 6.626 0 12-5.375 12-12s-5.374-12-12-12zm-1.535 2.414C4.738 2.414.44 6.713.44 12s4.3 9.588 9.586 9.588c.264 0 .44-.023.57-.045L1.054 12l9.543-9.543a3.337 3.337 0 00-.57-.043zm.746 2.457c-.263 0-.438.021-.57.043L17.287 12l-7.086 7.086c.132.022.307.045.57.045 3.927 0 7.13-3.204 7.13-7.131s-3.203-7.129-7.13-7.129zm-.416 2.434A4.701 4.701 0 005.66 12a4.701 4.701 0 004.695 4.695c.264 0 .44-.023.57-.045L6.274 12l4.653-4.65a3.296 3.296 0 00-.57-.045Z"
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
export class SvgClarisIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
