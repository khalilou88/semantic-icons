import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-jm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#000001" d="m0 0 256 256L0 512zm512 0L256 256l256 256z" />
        <path fill="#090" d="m0 0 256 256L512 0zm0 512 256-256 256 256z" />
        <path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z" />
        <path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z" />
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
export class SvgJmFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
