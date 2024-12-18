import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gr"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z" />
      <path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z" />
      <g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
        <path d="M106.7 0H160v266.7h-53.3z" />
        <path d="M0 106.7h266.7V160H0z" />
      </g>
      <path fill="#0d5eaf" d="M0 426.7h640V480H0z" />
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
export class SvgGrFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
