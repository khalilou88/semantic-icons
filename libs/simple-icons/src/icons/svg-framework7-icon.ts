import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-framework7-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Framework7</title>
      <path
        d="M0 12a11.95 11.95 0 012.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12zm22.271-6.208A11.944 11.944 0 0124 12c0 6.627-5.373 12-12 12-.794 0-1.57-.077-2.32-.224zM4.295 2.8A11.952 11.952 0 0112 0c2.933 0 5.62 1.052 7.705 2.8z"
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
export class SvgFramework7Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
