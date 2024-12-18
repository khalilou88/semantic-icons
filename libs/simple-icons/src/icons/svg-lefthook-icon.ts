import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lefthook-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lefthook</title>
      <path
        d="m5.4598 18.5173-.103.0303L0 16.1385l.121-.2724c.8535-1.9733 2.1186-3.7044 3.771-5.1934a22 22 0 0 1 .7143-.6174l-.2784-.5267-.339-.6355-.109-.2119-.0726-.1392.0666-.1392c.7445-1.5132 1.9067-2.3607 3.8013-2.8752 1.156-.3026 2.1245-.2845 2.9054.0848a17.4 17.4 0 0 1 4.6123-1.7978l.0606-.012L24 13.1845l-.0968.1816a193 193 0 0 1-2.2638 4.3945c-1.0472 1.9732-2.7844 2.6875-5.0422 2.3606-1.6948-.242-3.541-1.029-5.7503-2.288l-.6658-.3692c-1.023.1513-2.6028.5024-4.7274 1.0532Zm-1.1683-7.3907A14.36 14.36 0 0 0 .799 15.8298l3.7044 1.6706a31.3 31.3 0 0 1 3.7831-1.1077 1649 1649 0 0 0-3.8497-2.1549l-.2784-.1573 1.4103-2.2094L4.8968 10.6a21 21 0 0 0-.6053.5266m2.2518 2.9417h.006c2.288-.4055 4.0797-2.2214 4.7213-3.3715a13 13 0 0 0 .351-.5568l3.1355-5.5809a16.63 16.63 0 0 0-4.5276 1.9612l-.6537-.3026a23 23 0 0 1 .3269-.2058 4.13 4.13 0 0 0-2.0762.109c-1.6706.4418-2.6754 1.162-3.3412 2.415l.0423.0727.333.6355 1.1863 2.2396a3.05 3.05 0 0 0 1.15.0121c.5812-.0847 1.1138-.3026 1.5436-.6476.8535-.69 1.3074-1.2106 1.3437-1.6706.0424-.5448-.3147-1.2772-1.3135-2.6694 1.4104.9443 2.3728 2.4575 1.598 3.547v.0061a3.5 3.5 0 0 1-.2602.339c-.2543.2905-.563.575-.9867.92a3.84 3.84 0 0 1-1.834.7748 4 4 0 0 1-1.1561.0182l-1.1198 1.7553a1699 1699 0 0 1 2.9962 1.6707v-.0121c3.087-.1635 5.0845-2.0338 7.0154-5.1027-1.477 3.1354-3.305 5.145-6.1256 5.6172a99 99 0 0 1 1.61.908c3.0265-.1998 4.8545-1.8584 6.7673-4.897-1.4588 3.0992-3.1415 4.9272-5.8714 5.3993a33 33 0 0 0 .8898.4842l-.0303-.0302a14 14 0 0 0 .333.1816 25 25 0 0 0 .5023.242c3.0144-.1936 4.6971-1.6403 6.6099-4.6789-1.4043 2.9841-2.9055 4.6306-5.4295 5.145 1.8461.5448 3.3412.212 4.8423-.7263.5145-.3329 1.7493-2.0883 3.6923-5.2782L15.3322 4.765l-3.1839 5.6777a10.47 10.47 0 0 1-1.822 2.3244 5.69 5.69 0 0 1-3.777 1.3013z"
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
export class SvgLefthookIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
