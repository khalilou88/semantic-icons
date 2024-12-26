import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-connectdevelop-icon',
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
        d="M21.5813 11.5006L19.7778 8.3122C19.81 8.27999 19.81 8.18338 19.81 8.05455C19.81 7.7969 19.5523 7.50705 19.2625 7.50705L17.2013 3.96437C17.2335 3.93217 17.2335 3.83555 17.2335 3.77114C17.2335 3.44908 16.9758 3.22363 16.686 3.22363C16.4928 3.22363 16.3639 3.32025 16.2351 3.44908H12.3704C12.306 3.35246 12.1771 3.28805 12.0161 3.28805C11.8229 3.28805 11.694 3.38466 11.5974 3.51349H7.73269C7.60386 3.35246 7.44283 3.28805 7.2818 3.28805C6.95974 3.28805 6.7343 3.54569 6.7343 3.83555C6.7343 3.86776 6.76651 3.96437 6.76651 4.02879L4.70531 7.57146C4.51208 7.66808 4.35105 7.82911 4.35105 8.08676C4.35105 8.11896 4.35105 8.11896 4.35105 8.11896L2.45089 11.4684C2.19324 11.5006 2 11.726 2 12.0159C2 12.2736 2.19324 12.5312 2.45089 12.5634L4.44767 16.0095C4.41546 16.0417 4.41546 16.1061 4.41546 16.2027C4.41546 16.4603 4.6087 16.718 4.86634 16.7502L6.7343 20.0352C6.70209 20.0674 6.70209 20.1641 6.70209 20.2285C6.70209 20.5505 6.95974 20.776 7.2496 20.776C7.44283 20.776 7.57166 20.6793 7.66828 20.5827H11.5652C11.694 20.6793 11.8229 20.776 12.0161 20.776C12.1449 20.776 12.3382 20.6793 12.4348 20.5827H16.3317C16.4283 20.6793 16.5894 20.776 16.7504 20.776C17.0725 20.776 17.2979 20.5183 17.2979 20.2285C17.2979 20.1963 17.2979 20.1318 17.2657 20.0996L19.1337 16.8146C19.3913 16.7824 19.5845 16.557 19.5845 16.2671C19.5845 16.2349 19.5845 16.1383 19.5523 16.0739L21.5491 12.6278C21.8068 12.5956 22 12.3702 22 12.0803C22 11.7905 21.839 11.565 21.5813 11.5006ZM7.08857 19.1335L5.51047 16.3637H7.08857V19.1335ZM7.08857 16.1061H5.51047C5.51047 16.0739 5.47826 16.0739 5.47826 15.9773L7.12077 14.2381V16.1061H7.08857ZM7.08857 13.8194L5.22061 15.784C5.18841 15.7518 5.12399 15.6874 5.09179 15.6874L3.09501 12.1447C3.12721 12.1125 3.12721 12.0481 3.12721 12.0159C3.12721 11.9837 3.12721 11.9193 3.12721 11.8871L5.02738 8.60206C5.12399 8.60206 5.22061 8.56985 5.28502 8.50544L7.08857 10.4056V13.8194ZM7.08857 10.0513L5.44605 8.3122C5.47826 8.21558 5.54267 8.11896 5.54267 8.05455V8.02235L7.15298 7.47484L7.08857 10.0513ZM7.08857 7.15278L5.51047 7.70028L7.08857 4.93056V7.15278ZM19.0048 8.53764L19.037 8.56985L17.7488 14.6568L15.43 12.2091L19.0048 8.53764ZM12.1449 15.6874L12.5636 16.1383H11.694L12.1449 15.6874ZM12.1449 15.2365L9.08535 12.1125L11.9839 9.05294L15.0435 12.2413L12.1449 15.2365ZM12.306 15.462L15.1723 12.4668L17.62 15.0433L17.4589 16.1061H12.9501L12.306 15.462ZM16.4605 4.31864C16.4928 4.38305 16.4928 4.38305 16.5894 4.38305L18.6828 8.05455V8.08676C18.6828 8.18338 18.715 8.3122 18.7794 8.34441L15.2367 12.0159L12.1771 8.8275L16.4605 4.31864ZM16.1385 4.22202L12.0161 8.63426L9.92271 6.44424L16.0097 4.25423H16.1385V4.22202ZM11.6296 4.22202C11.7262 4.31864 11.8551 4.35085 11.9839 4.35085C12.1127 4.35085 12.2415 4.31864 12.3382 4.22202H15.0757L9.69726 6.1866L7.82931 4.22202H11.6296ZM7.41063 4.44747L7.44283 4.41526C7.47504 4.41526 7.47504 4.38305 7.53945 4.38305L9.40741 6.34763L7.41063 7.08837V4.44747ZM7.41063 7.37822L9.63285 6.57307L11.8229 8.89191L8.8599 11.9515L7.37842 10.3734C7.41063 10.3734 7.41063 7.37822 7.41063 7.37822ZM7.41063 10.7277L8.73108 12.0803L7.41063 13.4974V10.7277ZM7.41063 13.9161L8.95652 12.2736L12.0161 15.3975L11.372 16.0417H7.41063V13.9161ZM7.63607 19.842C7.60387 19.8098 7.50725 19.7454 7.41063 19.7132L7.37842 19.681V16.3637H11.0499L7.63607 19.842ZM12.3704 19.842C12.2738 19.7454 12.1449 19.7132 12.0161 19.7132C11.8873 19.7132 11.7585 19.7454 11.6618 19.842H8.11916L11.4686 16.3959H12.8857L16.2351 19.842H12.3704ZM16.7826 19.4233L16.6538 19.681C16.6216 19.681 16.5572 19.7132 16.525 19.7132L13.2399 16.3637H17.4267L16.7826 19.4233ZM17.2335 18.586L17.6844 16.3637H18.4895L17.2335 18.586ZM18.4895 16.1061H17.7166L17.8454 15.3331L18.4895 15.9773C18.5539 16.0095 18.4895 16.0417 18.4895 16.1061ZM20.905 12.1769L18.8438 15.6874C18.8116 15.7196 18.7472 15.7196 18.715 15.7196L17.942 14.9145L19.2303 8.95632L20.8728 11.8227C20.8728 11.8549 20.8406 11.9193 20.8406 11.9515C20.8728 12.1125 20.905 12.1447 20.905 12.1769Z"
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
export class SvgConnectdevelopIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
