import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-scpfoundation-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SCP Foundation</title>
      <path
        d="M11.577 5.064v.555l-.045.01c-.026 0-.148.015-.272.028a7.023 7.023 0 0 0-3.146 1.14A7.053 7.053 0 0 0 6.18 8.73a7.007 7.007 0 0 0-.507 6.893c.05.103.09.19.09.195 0 0-.236.145-.528.313a34.79 34.79 0 0 0-.544.317c-.014.01.013.063.196.38a8.68 8.68 0 0 0 .22.37 26.001 26.001 0 0 0 .55-.312c.297-.173.544-.313.55-.313.003 0 .052.063.106.14a7.057 7.057 0 0 0 1.801 1.74 7.258 7.258 0 0 0 1.69.826 6.992 6.992 0 0 0 4.41 0 7.228 7.228 0 0 0 1.69-.825 7.01 7.01 0 0 0 1.816-1.764c.063-.09.117-.162.12-.162.002 0 .244.138.536.306.292.17.539.31.548.314.013.01.064-.075.23-.362.192-.331.21-.371.195-.383-.01-.01-.255-.15-.546-.317a16.77 16.77 0 0 1-.527-.313s.036-.082.08-.174a7.033 7.033 0 0 0 .566-4.14 7.074 7.074 0 0 0-1.084-2.73 7.03 7.03 0 0 0-1.622-1.714 6.664 6.664 0 0 0-1.08-.663 6.834 6.834 0 0 0-2.378-.697l-.27-.028-.048-.01v-1.11h-.863zm0 3.102v1.25h-.492c-.285 0-.49 0-.487.01.01.032 1.428 2.775 1.432 2.775.004 0 1.42-2.743 1.434-2.774.002-.01-.213-.01-.51-.01h-.514V6.915h.05c.151 0 .606.076.912.152a5.304 5.304 0 0 1 1.137.42 5.64 5.64 0 0 1 1.165.755c.165.136.589.567.73.742.21.26.406.545.567.828.086.152.263.52.33.69a5.74 5.74 0 0 1 .115 3.918c-.096.29-.27.703-.294.703-.013 0-1.993-1.14-2.013-1.16-.013-.011.022-.08.223-.427.13-.228.24-.418.24-.424 0-.011.007-.011-.25-.022-.102 0-.195-.01-.204-.011-.01 0-.105-.01-.215-.01s-.224-.01-.254-.012c-.03 0-.126-.01-.216-.011-.088 0-.183-.01-.21-.011-.027 0-.134-.01-.237-.012-.104 0-.205-.01-.225-.01-.02 0-.118-.01-.22-.011-.102 0-.203-.01-.224-.011-.02 0-.13-.01-.243-.011-.112 0-.212-.01-.22-.011-.042-.01-.4-.018-.4-.012 0 0 .307.484.682 1.067l.843 1.31c.146.226.163.25.176.233.008-.011.124-.21.259-.443l.245-.424.032.019 1.013.584c.538.31.978.57.978.575 0 .016-.16.23-.29.39a8.634 8.634 0 0 1-.718.728 6.278 6.278 0 0 1-.76.54 7.585 7.585 0 0 1-.817.403 5.743 5.743 0 0 1-4.236 0c-.2-.08-.634-.292-.816-.403a6.23 6.23 0 0 1-.76-.54 8.363 8.363 0 0 1-.696-.7 4.14 4.14 0 0 1-.29-.383c.002 0 .443-.257.98-.567l1.01-.583.034-.021.235.407c.13.224.24.416.248.427.011.017.02.01.08-.086.036-.058.132-.21.213-.333l.267-.415c.114-.18.485-.756.583-.906l.242-.377.255-.396a.682.682 0 0 0 .058-.101c0-.01-.026-.01-.083-.01-.046 0-.15.01-.23.012-.08 0-.182.01-.226.01-.088.01-.239.014-.453.023-.075 0-.172.01-.216.01-.044 0-.14.01-.216.012-.137.01-.26.012-.45.022-.058 0-.212.01-.342.016-.13.01-.285.013-.342.016-.059 0-.153.01-.21.01-.263.014-.349.02-.349.027 0 0 .113.203.252.443l.253.437-.03.017c-.093.06-1.996 1.153-2.004 1.153-.013 0-.114-.214-.19-.406a5.79 5.79 0 0 1-.406-2.49 5.765 5.765 0 0 1 1.291-3.287c.143-.174.567-.606.732-.742.378-.313.73-.54 1.164-.756.4-.196.725-.317 1.137-.42.31-.077.733-.148.9-.15h.061zM8.531.806l-.168.964c-.088.513-.165.94-.17.947a.832.832 0 0 1-.164.077 10.594 10.594 0 0 0-6.498 8.22 2.255 2.255 0 0 1-.04.215c-.02.053-.064.467-.084.825a15.195 15.195 0 0 0 0 1.134c.013.235.033.455.066.736l.024.199-.043.04a44.252 44.252 0 0 1-.328.303l-.2.183c-.09.085-.106.1-.562.522-.198.18-.36.335-.364.34-.003 0 .132.246.299.536l1.738 3.01a200.286 200.286 0 0 0 1.446 2.484c.006 0 .091-.03.19-.066l.468-.171c.95-.348 1.182-.432 1.19-.432a.384.384 0 0 1 .075.053c.197.165.681.506 1 .704a11.19 11.19 0 0 0 1.898.926 10.64 10.64 0 0 0 4.967.593 10.69 10.69 0 0 0 2.583-.647c.106-.042.203-.078.215-.08.059-.01.404-.167.745-.34.553-.28 1.037-.58 1.545-.96l.208-.152.056.017.089.028a133.24 133.24 0 0 1 1.343.419c.015.01.077.025.14.043l.213.067a.612.612 0 0 0 .11.028c.013 0 3.486-6.017 3.482-6.027-.003-.01-.21-.182-1.076-.904l-.415-.347c-.02-.02-.02-.023.002-.18.12-.844.134-1.68.045-2.56a10.59 10.59 0 0 0-5.284-8.136 11.63 11.63 0 0 0-1.226-.6c-.05-.02-.092-.045-.094-.054-.003-.01-.104-.452-.223-.983l-.222-.984c-.005-.017-.18-.018-3.489-.018h-3.48Zm6.395.55a183.046 183.046 0 0 1 .426 1.832c.008.03.02.037.213.11.425.165.93.4 1.282.597a9.974 9.974 0 0 1 5.106 7.923c.035.432.042 1.199.012 1.558-.028.345-.081.75-.143 1.093l-.013.073.048.046a5.893 5.893 0 0 0 .255.219c.006.01.062.053.123.102l.214.177.41.344c.413.345.384.318.37.34-.004.01-.66 1.142-1.452 2.516-.867 1.503-1.45 2.5-1.458 2.5-.01 0-.095-.024-.191-.053l-.213-.064a44.667 44.667 0 0 1-.857-.262c-.012-.01-.043-.015-.07-.022-.027-.01-.058-.016-.07-.022-.012-.01-.055-.02-.097-.03l-.207-.062c-.13-.04-.132-.04-.16-.02l-.18.145c-.261.21-.743.56-.773.56a.77.77 0 0 0-.106.062 10.05 10.05 0 0 1-4.744 1.559 16.157 16.157 0 0 1-1.284 0c-1.405-.105-2.64-.443-3.845-1.05a10.14 10.14 0 0 1-1.764-1.131.565.565 0 0 0-.088-.066.995.995 0 0 1-.117-.095l-.104-.09-.05.01a5.057 5.057 0 0 0-.466.164 60.002 60.002 0 0 1-.528.195l-.529.193a2.303 2.303 0 0 1-.188.066c-.006 0-.666-1.134-1.466-2.52l-1.455-2.52.037-.031.214-.202.248-.233.173-.164c.056-.054.128-.12.16-.15l.1-.09a41.97 41.97 0 0 1 .41-.385l.072-.07-.015-.077a8.382 8.382 0 0 1-.118-1c0-.087-.006-.32-.01-.518A9.967 9.967 0 0 1 6.46 4.329a9.862 9.862 0 0 1 2.178-1.1c.124-.044.13-.048.138-.082.011-.043.081-.437.214-1.202l.103-.586.005-.024h2.91c2.765 0 2.912 0 2.918.018z"
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
export class SvgScpfoundationIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
