import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lineicons-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49578 7.55756C7.26906 7.33084 6.93352 7.23109 6.61611 7.3127C6.29871 7.38525 6.04478 7.62104 5.94503 7.93845L2.04548 20.0814C1.93666 20.417 2.02735 20.7797 2.2722 21.0246C2.45358 21.206 2.68936 21.2966 2.93422 21.2966C3.0249 21.2966 3.12466 21.2785 3.21535 21.2513L15.3674 17.3518C15.6757 17.252 15.9115 16.9981 15.9932 16.6807C16.0748 16.3633 15.975 16.0277 15.7483 15.801L7.49578 7.55756ZM4.37614 18.9297L7.25092 9.96077L13.3451 16.0549L4.37614 18.9297Z"
        fill="#323544"
      />
      <path
        d="M12.5018 9.57049C12.5652 10.0421 12.9643 10.3867 13.4268 10.3867C13.8335 10.3867 14.2482 10.2944 14.651 10.2416C15.8209 10.0874 16.7096 9.08078 16.7006 7.90185V7.61165C16.7006 7.47562 16.755 7.35773 16.8457 7.26704C16.9364 7.17635 17.0633 7.12194 17.1903 7.12194H18.732C19.2489 7.12194 19.666 6.70478 19.666 6.18787C19.666 5.67095 19.2489 5.25379 18.732 5.25379H17.1903C16.5645 5.25379 15.9751 5.49864 15.5307 5.94301C15.0863 6.38738 14.8415 6.98591 14.8415 7.61165V7.90185C14.8415 8.1467 14.6601 8.35529 14.4153 8.38249L13.3089 8.52759C12.801 8.59107 12.4383 9.06264 12.5018 9.57049Z"
        fill="#323544"
      />
      <path
        d="M21.6335 10.8767C19.2756 9.07205 16.7273 10.6681 15.7026 11.7655C15.3489 12.1373 15.3761 12.7267 15.7479 13.0804C16.1252 13.4388 16.7136 13.4109 17.0629 13.0441C17.1354 12.9625 18.9038 11.1306 20.4999 12.3549C20.908 12.6723 21.4975 12.5907 21.8058 12.1826C22.1232 11.7745 22.0416 11.1851 21.6335 10.8767Z"
        fill="#323544"
      />
      <path
        d="M11.4222 7.61201C12.4651 6.81397 13.5171 4.94581 12.1477 3.08673C11.8394 2.66957 11.259 2.57888 10.8419 2.88722C10.4247 3.19555 10.334 3.77595 10.6423 4.19311C11.3588 5.16346 10.5426 5.9343 10.2796 6.14288C9.8715 6.46029 9.79895 7.04068 10.1073 7.44878C10.4263 7.86352 11.0127 7.91378 11.4222 7.61201Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLineiconsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
