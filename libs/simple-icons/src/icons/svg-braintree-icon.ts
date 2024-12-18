import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-braintree-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Braintree</title>
      <path
        d="M8.276 20.482h4.717c3.641 0 5.462-1.2 5.462-3.517 0-2.275-1.945-3.517-5.752-3.517H8.276Zm0-16.965v6.538h4.138c3.103 0 4.717-1.159 4.717-3.269 0-2.152-1.655-3.269-4.759-3.269zM1.696 24v-3.518H4.47V3.517H1.697V0h11.089c5.09 0 8.193 2.358 8.193 6.455 0 2.69-1.572 4.345-3.558 5.131 2.855.787 4.882 2.814 4.882 5.586 0 4.386-3.393 6.828-8.938 6.828H1.697"
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
export class SvgBraintreeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
