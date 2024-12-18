import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fauna-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fauna</title>
      <path
        d="M17.864 5.034c-1.454.496-2.155 1.385-2.632 2.77-.123.369-.43.778-.777 1.053l1.193 1.306-3.787-2.706L1.411 0s.754 5.003 1.015 6.844c.185 1.298.5 1.88 1.5 2.47l.401.22 1.724.928-1.024-.543 4.726 2.636-.031.07-5.087-2.407c.27.944.793 2.761 1.016 3.564.238.865.508 1.18 1.331 1.487l1.516.566.94-.378-1.194.81L2.28 24c3.963-3.76 7.319-5.097 9.774-6.19 3.132-1.385 5.018-2.274 6.249-5.468.877-2.242 1.562-5.113 2.432-6.222l1.855-2.423s-3.84 1.039-4.726 1.337z"
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
export class SvgFaunaIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}