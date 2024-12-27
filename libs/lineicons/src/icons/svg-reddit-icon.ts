import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-reddit-icon',
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
        d="M8.963 13.707C8.87 13.6142 8.7965 13.504 8.746 13.3827C8.69575 13.2612 8.67 13.1312 8.67 13C8.67 12.5955 8.91375 12.231 9.28725 12.076C9.661 11.9212 10.091 12.007 10.377 12.293C10.663 12.579 10.7488 13.009 10.594 13.3827C10.439 13.7562 10.0745 14 9.67 14C9.53867 14 9.40862 13.9742 9.28725 13.924C9.166 13.8735 9.05575 13.8 8.963 13.707Z"
        fill="#323544"
      />
      <path
        d="M14.555 15.5935C14.554 15.665 14.5248 15.7332 14.4735 15.7832L14.48 15.75C14.3043 15.8825 14.1175 15.9995 13.9218 16.1C13.5294 16.3011 13.1054 16.4333 12.6683 16.4907C12.45 16.5192 12.2298 16.529 12.01 16.52C11.7903 16.529 11.57 16.5192 11.3518 16.4907C11.1335 16.462 10.9183 16.4147 10.7083 16.3492C10.4983 16.2837 10.294 16.2005 10.0983 16.1C9.9025 15.9995 9.71575 15.8825 9.54 15.75C9.4975 15.6982 9.47575 15.6325 9.479 15.5655C9.48225 15.4985 9.5105 15.4352 9.55775 15.3877C9.60525 15.3405 9.6685 15.3122 9.7355 15.309C9.8025 15.3057 9.86825 15.3275 9.92 15.37C10.069 15.4792 10.227 15.5757 10.3923 15.6582C10.5575 15.7407 10.7293 15.8092 10.9063 15.8627C11.083 15.9165 11.264 15.955 11.4473 15.9777C11.6305 16.0007 11.8155 16.0082 12 16C12.1848 16.01 12.37 16.0045 12.554 15.9832C12.7378 15.962 12.9195 15.9252 13.097 15.8735C13.2746 15.8216 13.4476 15.7548 13.614 15.6737C13.7804 15.5928 13.9396 15.4979 14.09 15.39C14.1478 15.3467 14.2168 15.319 14.2885 15.32C14.36 15.321 14.4283 15.3502 14.4783 15.4015C14.5283 15.4527 14.556 15.5217 14.555 15.5935Z"
        fill="#323544"
      />
      <path
        d="M14.6853 14.0032C14.56 14.0552 14.4255 14.0815 14.29 14.08L14.3 14.04C13.8955 14.04 13.531 13.7962 13.376 13.4227C13.2213 13.049 13.307 12.619 13.593 12.333C13.879 12.047 14.309 11.9612 14.6828 12.116C15.0563 12.271 15.3 12.6355 15.3 13.04C15.3055 13.1755 15.2833 13.3106 15.2348 13.4372C15.1863 13.564 15.1128 13.6795 15.0183 13.7767C14.9238 13.874 14.8105 13.951 14.6853 14.0032Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM18.619 12.406C18.655 12.2737 18.672 12.137 18.67 12C18.6597 11.7185 18.5682 11.4459 18.4065 11.2152C18.2448 10.9846 18.0199 10.8056 17.7588 10.7C17.4977 10.5943 17.2116 10.5664 16.935 10.6197C16.6584 10.6729 16.4032 10.8049 16.2 11C15.9175 10.8079 15.6214 10.6365 15.3143 10.487C14.6992 10.1873 14.0441 9.97799 13.3693 9.8655C13.0323 9.80925 12.6915 9.77725 12.35 9.77L13 6.65L15.14 7.1C15.1925 7.5885 15.5923 7.9665 16.083 7.99175C16.5735 8.017 17.01 7.682 17.1123 7.2015C17.2148 6.721 16.9528 6.23725 16.4945 6.06025C16.0363 5.88325 15.5173 6.06525 15.27 6.49L12.82 6C12.78 5.99125 12.7385 5.9905 12.6983 5.99775C12.6578 6.00525 12.6193 6.0205 12.5848 6.04275C12.5505 6.065 12.5208 6.094 12.4978 6.12775C12.4745 6.16175 12.4583 6.19975 12.45 6.24L11.71 9.71C11.3643 9.71525 11.0193 9.7455 10.678 9.80075C10.3368 9.856 9.99975 9.93575 9.67 10.0397C9.34025 10.1437 9.0185 10.2717 8.70725 10.4222C8.39608 10.573 8.09621 10.746 7.81 10.94C7.65583 10.795 7.47196 10.6852 7.27114 10.6183C7.07032 10.5514 6.85736 10.5289 6.647 10.5525C6.43667 10.576 6.23397 10.6449 6.05296 10.7546C5.87195 10.8642 5.71696 11.012 5.59875 11.1875C5.48044 11.3631 5.40172 11.5623 5.36805 11.7713C5.33438 11.9803 5.34656 12.1942 5.40375 12.398C5.46104 12.6018 5.56192 12.7906 5.6994 12.9515C5.83688 13.1125 6.00769 13.2416 6.2 13.33C6.19725 13.3665 6.195 13.4032 6.19375 13.44C6.19074 13.5133 6.19074 13.5867 6.19375 13.66C6.195 13.6967 6.19725 13.7335 6.2 13.77C6.2 16.01 8.81 17.83 12.03 17.83C15.25 17.83 17.86 16.01 17.86 13.77C17.8628 13.7335 17.865 13.6967 17.8663 13.66C17.8693 13.5867 17.8693 13.5133 17.8663 13.44C17.865 13.4032 17.8628 13.3665 17.86 13.33C17.9828 13.269 18.0963 13.191 18.1973 13.0982C18.2983 13.0055 18.3858 12.899 18.457 12.782C18.5285 12.665 18.583 12.5382 18.619 12.406Z"
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
export class SvgRedditIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
