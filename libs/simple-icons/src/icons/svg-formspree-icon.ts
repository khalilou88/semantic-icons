import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-formspree-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Formspree</title>
      <path
        d="M1.333 2a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.857a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm0 8.571a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.858a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm2 6.572a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.857a2 2 0 0 0-2-2z"
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
export class SvgFormspreeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
