import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-map-marker-1-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4125 6.03149C11.4125 5.53444 11.8154 5.13149 12.3125 5.13149H12.3225C12.8196 5.13149 13.2225 5.53444 13.2225 6.03149C13.2225 6.52855 12.8196 6.93149 12.3225 6.93149H12.3125C11.8154 6.93149 11.4125 6.52855 11.4125 6.03149Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3214 11.9984C11.8504 12.5821 11.8503 12.5819 11.8501 12.5818L11.8484 12.5805L11.8452 12.5779L11.8353 12.5698L11.8019 12.5419C11.7738 12.5183 11.7343 12.4846 11.6849 12.4412C11.5863 12.3546 11.4483 12.2292 11.2838 12.0689C10.9558 11.7493 10.5186 11.2866 10.0801 10.7121C9.21625 9.5802 8.28125 7.92761 8.28125 6.03146C8.28125 3.80494 10.0862 2 12.3127 2C14.5392 2 16.3442 3.80494 16.3442 6.03146C16.3442 7.92636 15.4146 9.57842 14.5551 10.7105C14.119 11.2851 13.684 11.7478 13.3577 12.0676C13.1941 12.2278 13.0567 12.3533 12.9586 12.4399C12.9095 12.4833 12.8701 12.517 12.8422 12.5407L12.8089 12.5685L12.799 12.5766L12.7958 12.5793L12.7947 12.5802C12.7945 12.5803 12.7939 12.5809 12.3214 11.9984ZM12.3127 3.5C10.9146 3.5 9.78125 4.63337 9.78125 6.03146C9.78125 7.44761 10.4913 8.77848 11.2725 9.802C11.6518 10.299 12.0323 10.7031 12.32 10.9842C12.6059 10.7032 12.9838 10.2997 13.3604 9.80353C14.1373 8.78026 14.8442 7.44885 14.8442 6.03146C14.8442 4.63337 13.7108 3.5 12.3127 3.5Z"
        fill="#323544"
      />
      <path
        d="M12.3214 11.9984L12.7939 12.5809C12.519 12.8038 12.1254 12.804 11.8501 12.5818L12.3214 11.9984Z"
        fill="#323544"
      />
      <path
        d="M8.88726 11.6214C9.25651 12.1052 9.62365 12.5169 9.93896 12.8435V18.5475L14.6925 17.4066V12.8501C15.0086 12.5217 15.3779 12.1061 15.7493 11.6168C15.8938 11.4266 16.0431 11.2192 16.1925 10.9958L16.1925 17.412L19.8836 18.316C20.3561 18.4317 20.812 18.074 20.812 17.5875V7.17618C20.812 6.83068 20.576 6.52989 20.2404 6.4477L17.8411 5.8601C17.824 5.29617 17.7225 4.75346 17.5488 4.24419L20.5972 4.99076C21.604 5.23731 22.312 6.13969 22.312 7.17618V17.5875C22.312 19.0468 20.9443 20.1201 19.5268 19.7729L15.612 18.8142C15.4959 18.7858 15.3747 18.7855 15.2585 18.8134L9.71606 20.1436C9.36747 20.2273 9.00393 20.2264 8.65574 20.1412L4.02728 19.0076C3.02055 18.7611 2.3125 17.8587 2.3125 16.8222V6.41088C2.3125 4.95156 3.68027 3.87833 5.09771 4.22547L6.94725 4.67842C6.83851 5.1112 6.78076 5.56422 6.78076 6.03072C6.78076 6.08145 6.78129 6.132 6.78233 6.18236L4.7409 5.68241C4.26842 5.5667 3.8125 5.92444 3.8125 6.41088V16.8222C3.8125 17.1677 4.04852 17.4685 4.38409 17.5507L8.43896 18.5437V10.9962C8.59011 11.2213 8.74122 11.4301 8.88726 11.6214Z"
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
export class SvgMapMarker1Icon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
