import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-silverairways-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Silver Airways</title>
      <path
        d="M11.102 20.437v-2.675a1.339 1.339 0 0 0-.06-.357.216.216 0 0 1-.007-.03 6.631 6.631 0 0 1-.03-.934c.016-.117.05-.234.075-.35 0-.004.011-.008.011-.011 0-.053.018-.12-.008-.153-.025-.033-.09.01-.128.029-.15.069-.313.099-.464.164-.193.083-.398.132-.591.217a3.616 3.616 0 0 1-.406.143c-.128.04-.25.095-.376.138-.126.043-.241.087-.361.129-.174.06-.346.125-.528.17a.435.435 0 0 0-.207.143.048.048 0 0 0-.008.043c.09.143 0 .254-.07.362-.068.108-.166.195-.228.305-.061.11-.142.193-.207.294-.114.173-.255.327-.383.49-.05.062-.096.127-.144.19a.636.636 0 0 1-.105.12.162.162 0 0 1-.109.012c-.009 0-.016-.045-.018-.069-.013-.152.052-.286.112-.418.101-.218.208-.434.32-.648a1.455 1.455 0 0 0 .139-.41c.013-.074.018-.147.029-.22.02-.123.1-.196.207-.26.171-.099.36-.15.54-.223.138-.056.276-.107.415-.16.207-.08.41-.158.614-.24.142-.057.286-.112.429-.168.207-.083.423-.157.634-.235.105-.04.211-.079.315-.12.153-.059.307-.116.457-.18a.225.225 0 0 0 .143-.177c.021-.112.048-.214 0-.324a.35.35 0 0 1 0-.132v-3.506a.576.576 0 0 0-.11-.336 1.678 1.678 0 0 0-.188-.222c-.116-.12-.212-.255-.319-.382a1.048 1.048 0 0 0-.523-.337.65.65 0 0 0-.219-.034c-.077.005-.155 0-.233 0-.217 0-.432.057-.65.033-.054-.006-.093.076-.163.014-.032-.028-.104-.011-.158-.013a.76.76 0 0 1-.182-.003c-.148-.044-.3-.07-.445-.128a11.382 11.382 0 0 0-.65-.234c-.22-.072-.426-.127-.63-.207a1.67 1.67 0 0 1-.715-.512 2.168 2.168 0 0 1-.304-.539c-.049-.125-.063-.26-.121-.38a.08.08 0 0 1-.006-.032c0-.08.012-.161-.034-.235 0-.305-.006-.61.006-.914a1.115 1.115 0 0 1 .03-.185c.014-.062.02-.126.034-.185.033-.134.086-.263.13-.395a3.477 3.477 0 0 1 .233-.5 2.48 2.48 0 0 1 .315-.469c.108-.126.198-.27.32-.38.192-.171.372-.357.59-.5.074-.048.137-.12.206-.176.175-.138.33-.295.506-.429.117-.09.217-.197.325-.296a2.23 2.23 0 0 0 .184-.154 2.256 2.256 0 0 0 .31-.42c.046-.086.091-.174.139-.256.069-.11.083-.232.121-.345a.71.71 0 0 0-.1-.339 1.672 1.672 0 0 0-.247-.232.258.258 0 0 0-.306-.01c-.121.068-.258.068-.384.116-.035.013-.083-.008-.124-.015-.016 0-.03-.016-.044-.015-.15.012-.276-.056-.397-.125-.07-.04-.148-.07-.221-.108a1.212 1.212 0 0 0-.223-.06.572.572 0 0 0-.356.054 1.52 1.52 0 0 0-.507.34 11.48 11.48 0 0 1-.457.423.89.89 0 0 1-.183.117c-.102.053-.154.018-.171-.092a.71.71 0 0 1 .041-.267 2.671 2.671 0 0 1 .092-.31c.036-.102.07-.207.1-.307A1.696 1.696 0 0 1 5.65.952c.182-.268.457-.392.74-.494A2.104 2.104 0 0 1 6.789.37a1.624 1.624 0 0 0 .397-.08c.118-.05.243-.08.362-.129a1.48 1.48 0 0 1 .436-.126c.063-.005.119-.044.186-.033.249.04.49.088.692.262a3.27 3.27 0 0 1 .276.25 2.42 2.42 0 0 1 .48.716 2.125 2.125 0 0 1 .162.599 3.135 3.135 0 0 1 .025.402c0 .096-.025.19-.03.286a1.763 1.763 0 0 1-.06.257 3.041 3.041 0 0 1-.309.82 2.143 2.143 0 0 1-.328.48c-.04.042-.069.097-.107.138a2.786 2.786 0 0 1-.617.477 3.847 3.847 0 0 0-.602.386c-.115.095-.24.19-.309.335-.188.163-.267.395-.374.609a3.387 3.387 0 0 0-.187.537c-.046.15-.042.31-.098.458a.133.133 0 0 0 0 .033c-.007.079.01.158-.03.237a.183.183 0 0 0 0 .16c.054.07 0 .148.053.214s.07.155.123.213a.577.577 0 0 0 .341.172 1.856 1.856 0 0 0 .297 0c.004-.092.01-.184.013-.276a.928.928 0 0 1 0-.116c.01-.07-.02-.146.027-.222.034-.053-.025-.139.038-.2.013-.255.133-.475.24-.698a1.93 1.93 0 0 1 .187-.287 2.666 2.666 0 0 1 .175-.207c.15-.17.346-.287.527-.415.228-.156.484-.243.743-.333a1.634 1.634 0 0 1 .622-.1c.133.006.266-.004.4 0 .084.004.166-.02.254.026.065.036.161-.022.233.038.099-.023.19.025.284.038.095.013.184.04.277.055.113.02.224.048.336.074.15.036.3.069.45.118l.337.107a7.576 7.576 0 0 1 1.202.508c.228.117.465.244.691.383.227.14.437.262.643.415.144.106.29.207.436.31.121.084.23.184.357.261.07.04.12.104.185.153.114.083.208.188.318.276.392.324.725.708 1.089 1.06.047.045.108.068.144.137a1.056 1.056 0 0 1 .078.168 1.568 1.568 0 0 0 .29.512 7.377 7.377 0 0 1 .46.622c.076.11.099.247.144.372a1.114 1.114 0 0 1 .069.438c-.006.1.007.2 0 .299a1.297 1.297 0 0 1-.132.493.4.4 0 0 1-.036.07.05.05 0 0 1-.042.013c-.01 0-.018-.024-.02-.038-.021-.09-.045-.183-.06-.276a1.994 1.994 0 0 0-.124-.382 7.084 7.084 0 0 0-.276-.665c-.12-.248-.315-.286-.507-.267-.01 0-.03.036-.025.047.04.094.085.186.13.276a5.817 5.817 0 0 1 .322.814c.069.216.113.44.175.659.005.017-.008.04-.013.06-.018-.006-.044-.007-.055-.02-.035-.04-.064-.085-.095-.126-.005-.006-.016-.008-.024-.013 0 .01-.012.022-.01.029.057.159.003.328.039.484a2.923 2.923 0 0 1 .027.37c.008.084.026.167.032.252.006.084 0 .166 0 .249 0 .018.022.035.028.054a.077.077 0 0 1-.055.085c-.04.006-.032-.028-.045-.05a.54.54 0 0 1-.069-.207 3.097 3.097 0 0 0-.074-.334c-.027-.105-.062-.207-.089-.312a5.035 5.035 0 0 0-.186-.604 6.155 6.155 0 0 0-.211-.477 3.158 3.158 0 0 0-.227-.356 3.42 3.42 0 0 0-.331-.36.465.465 0 0 0-.06-.058.058.058 0 0 0-.081.043v.3a.169.169 0 0 1 0 .064c-.006.013-.04.026-.049.02a.178.178 0 0 1-.048-.062 1.113 1.113 0 0 1-.093-.177 1.452 1.452 0 0 0-.288-.477 2.309 2.309 0 0 0-.438-.419 1.74 1.74 0 0 1-.228-.165c-.1-.093-.226-.11-.34-.15a.333.333 0 0 0-.294.069c-.077.063-.15.045-.228.054a.228.228 0 0 1-.16-.059c-.17-.118-.254-.116-.474-.08-.256.042-.463.169-.67.308a1.257 1.257 0 0 1-.516.202c-.108.016-.215.01-.32.03-.155.03-.317.025-.47.07a1.076 1.076 0 0 0-.245.127.38.38 0 0 0-.12.097c-.115.166-.118.283-.004.45.062.09.128.18.2.265q.2.239.387.484c.108.138.233.268.338.41.104.143.22.271.322.415.102.144.235.276.346.422.163.202.322.408.483.613a3.72 3.72 0 0 0 .473.5.776.776 0 0 1 .208.213c.011.023.038.05.033.07a.18.18 0 0 1-.058.084.956.956 0 0 1-.277.132c-.276.1-.553.193-.83.288-.276.094-.547.173-.813.282-.265.11-.542.158-.793.293-.012.007-.033 0-.047 0a.167.167 0 0 0-.139.177.612.612 0 0 0 .027.222c.026.073.006.163.006.246 0 .228-.008.455 0 .682.005.1-.043.187-.038.285a.91.91 0 0 1 0 .298c-.044.146-.006.294-.031.436-.047.266-.026.534-.03.8-.004.267.025.546-.007.814-.04.335-.018.667-.026 1-.008.333.024.667-.008.997-.045.484-.012.968-.026 1.452 0 .11.006.107.064.255.037.096.076.19.12.283a.224.224 0 0 1-.089.283.09.09 0 0 1-.044.013h-.265c-.089 0-.152.039-.236.037a29.968 29.968 0 0 0-1.03 0 .471.471 0 0 0-.171.026c-.09.034-.18-.034-.265-.07-.01-.003-.01-.063 0-.084a.338.338 0 0 1 .224-.139c.202-.046.399-.113.601-.153.128-.026.254-.062.384-.08a.814.814 0 0 0 .253-.07.22.22 0 0 0 .117-.18c.003-.04 0-.078 0-.117zm.465-5.566v.365c0 .033-.012.053.047.03.09-.036.179-.077.27-.109a9.12 9.12 0 0 0 .515-.198c.17-.07.355-.131.53-.202.175-.072.353-.139.531-.2a2.29 2.29 0 0 0 .24-.1c.063-.03.079-.08.045-.13-.081-.116-.16-.234-.247-.345a8.168 8.168 0 0 0-.435-.533c-.139-.156-.271-.32-.411-.477-.14-.156-.255-.305-.386-.454a12.227 12.227 0 0 1-.562-.663c-.008-.011-.033-.024-.04-.02a.07.07 0 0 0-.03.043c-.013.284 0 .566-.027.85-.031.301 0 .608-.008.912-.008.304.022.6-.03.899a2.034 2.034 0 0 0-.003.332z"
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
export class SvgSilverairwaysIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
