import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-kinsta-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kinsta</title>
      <path
        d="M10.2228 10.4037a1.9856 1.9856 0 0 0-.6276-.4289 1.9113 1.9113 0 0 0-.7624-.1548 1.9704 1.9704 0 0 0-.72.1348 1.9909 1.9909 0 0 0-.6166.3812l-.3169-.3678a.1816.1816 0 0 0-.1358-.0624h-.01a.1796.1796 0 0 0-.1796.18v4.0695a.1806.1806 0 0 0 .1796.181h.7662a.1806.1806 0 0 0 .1802-.181v-2.3478a.831.831 0 0 1 .0658-.3288.843.843 0 0 1 .181-.2706.8525.8525 0 0 1 .6066-.2478.8134.8134 0 0 1 .3255.0658.8515.8515 0 0 1 .4493.4522.8406.8406 0 0 1 .0658.3288v2.3511a.181.181 0 0 0 .1802.181h.7652a.1806.1806 0 0 0 .1797-.181v-2.3506a1.9537 1.9537 0 0 0-.1544-.772 2.0218 2.0218 0 0 0-.4217-.6318zm8.692-.4865h-3.0191a.1801.1801 0 0 0-.1792.1806v.7624a.1796.1796 0 0 0 .1792.1801h.1906a.1806.1806 0 0 1 .1801.1806v1.135a1.9504 1.9504 0 0 0 .154.7696 2.009 2.009 0 0 0 1.055 1.0574 1.906 1.906 0 0 0 .767.1554h.6744a.1806.1806 0 0 0 .18-.1811v-.7624a.1801.1801 0 0 0-.18-.1806h-.6762a.8396.8396 0 0 1-.3336-.0681.8749.8749 0 0 1-.2716-.1835.8477.8477 0 0 1-.1815-.2711.8387.8387 0 0 1-.0653-.3336v-1.135a.1806.1806 0 0 1 .1796-.1806h1.348a.1801.1801 0 0 0 .1802-.1801v-.7625a.1806.1806 0 0 0-.1816-.1825zm4.9081-.082h-.008a.1787.1787 0 0 0-.1396.0662l-.2645.3169a.1792.1792 0 0 1-.2535.0229 2.9934 2.9934 0 0 0-.202-.1568 2.5312 2.5312 0 0 0-.3774-.2235 2.2239 2.2239 0 0 0-.4079-.1491 1.7264 1.7264 0 0 0-.425-.0538 2.2506 2.2506 0 0 0-.8768.172 2.1862 2.1862 0 0 0-.719.4803 2.281 2.281 0 0 0-.4847.7424 2.4826 2.4826 0 0 0-.1768.9497 2.5998 2.5998 0 0 0 .1768.9888 2.1538 2.1538 0 0 0 .4846.7343 2.0795 2.0795 0 0 0 .7176.457 2.426 2.426 0 0 0 .8768.1577 1.684 1.684 0 0 0 .4227-.0543 2.3054 2.3054 0 0 0 .4064-.1468 2.4864 2.4864 0 0 0 .3774-.2197 3.3448 3.3448 0 0 0 .1959-.1472.1787.1787 0 0 1 .2583.0348l.2697.375a.1796.1796 0 0 0 .326-.1058v-4.0608a.1801.1801 0 0 0-.1788-.1806zm-1.0426 2.616a1.2947 1.2947 0 0 1-.2411.3846 1.2051 1.2051 0 0 1-.357.2687.9768.9768 0 0 1-.4354.101 1.2037 1.2037 0 0 1-.4346-.0785.9768.9768 0 0 1-.3545-.2321 1.086 1.086 0 0 1-.2383-.3779 1.5753 1.5753 0 0 1 0-1.0307 1.1022 1.1022 0 0 1 .2383-.3778.9864.9864 0 0 1 .3545-.2316 1.2075 1.2075 0 0 1 .4346-.0786.9711.9711 0 0 1 .4355.101 1.185 1.185 0 0 1 .3569.2687 1.2961 1.2961 0 0 1 .2411.3846 1.1913 1.1913 0 0 1 0 .8996zM.9561 9.9091H.1808a.1801.1801 0 0 0-.1806.18v4.0695a.181.181 0 0 0 .1806.181h.7738a.1806.1806 0 0 0 .1802-.181v-4.0694A.1801.1801 0 0 0 .955 9.909zm3.1688.3068a.181.181 0 0 0-.1363-.2987h-.8692a.1787.1787 0 0 0-.1362.0634L1.2367 12.011a.1796.1796 0 0 0 0 .2382l1.7465 2.03a.1787.1787 0 0 0 .1362.0629h.8682a.181.181 0 0 0 .1363-.2993l-1.551-1.794a.1806.1806 0 0 1 0-.2383zm1.6873-.3073h-.01a.1792.1792 0 0 0-.1363.0629l-.0362.0424-.72.8343a.1787.1787 0 0 0-.0438.1182v3.1927a.1801.1801 0 0 0 .1797.1805h.7652a.1806.1806 0 0 0 .1797-.1805v-4.07a.1806.1806 0 0 0-.1797-.1805Zm9.2043 2.0728a1.3819 1.3819 0 0 0-.4455-.2711 1.5248 1.5248 0 0 0-.5442-.0953H12.854a.2664.2664 0 0 1-.1982-.0848.283.283 0 0 1-.0824-.205.282.282 0 0 1 .2806-.281h2.1015a.1801.1801 0 0 0 .1796-.1802v-.7662a.1801.1801 0 0 0-.1796-.1806h-2.102a1.3819 1.3819 0 0 0-.5489.1096 1.391 1.391 0 0 0-.7438.7462 1.4367 1.4367 0 0 0 0 1.1007 1.4167 1.4167 0 0 0 .7438.753 1.3571 1.3571 0 0 0 .549.1114h1.2093a.2411.2411 0 0 1 .2416.2159.2383.2383 0 0 1-.2382.2597h-2.436a.1796.1796 0 0 0-.1791.1801v.7624a.1796.1796 0 0 0 .1792.1801h2.394a1.3905 1.3905 0 0 0 .9897-.4112 1.4624 1.4624 0 0 0 .3011-.447 1.3643 1.3643 0 0 0 .1115-.548 1.2666 1.2666 0 0 0-.1115-.5332 1.3009 1.3009 0 0 0-.2997-.415z"
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
export class SvgKinstaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
