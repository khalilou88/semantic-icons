import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hexagonal-prism-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hexagonal-prism"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20.792 6.996l-3.775 2.643a2.005 2.005 0 0 1 -1.147 .361h-7.74c-.41 0 -.81 -.126 -1.146 -.362l-3.774 -2.641"
      />
      <path d="M8 10v11" />
      <path d="M16 10v11" />
      <path
        d="M3.853 18.274l3.367 2.363a2 2 0 0 0 1.147 .363h7.265c.41 0 .811 -.126 1.147 -.363l3.367 -2.363c.536 -.375 .854 -.99 .854 -1.643v-9.262c0 -.655 -.318 -1.268 -.853 -1.643l-3.367 -2.363a2 2 0 0 0 -1.147 -.363h-7.266c-.41 0 -.811 .126 -1.147 .363l-3.367 2.363a2.006 2.006 0 0 0 -.853 1.644v9.261c0 .655 .318 1.269 .853 1.644z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHexagonalPrismIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
