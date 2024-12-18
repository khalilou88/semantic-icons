import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tamiya-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tamiya</title>
      <path
        d="M0 6.408v4.27h4.496l1.36-4.27Zm5.856 0 1.398 4.27h4.496v-4.27Zm5.894 4.27-3.627 2.644 1.398 4.27h2.23Zm-2.23 6.914-3.664-2.645-3.627 2.645Zm-7.291 0 1.398-4.27L0 10.678v6.914zM12.25 6.408v4.27h4.496l1.36-4.27zm5.856 0 1.398 4.27H24v-4.27ZM24 10.678l-3.627 2.644 1.398 4.27H24Zm-2.23 6.914-3.664-2.645-3.627 2.645zm-7.29 0 1.397-4.27-3.627-2.644v6.914z"
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
export class SvgTamiyaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
