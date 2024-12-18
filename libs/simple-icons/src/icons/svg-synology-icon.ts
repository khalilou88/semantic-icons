import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-synology-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Synology</title>
      <path
        d="M13.44 8.927l-.889.37.056.117a.623.623 0 0 1 .212-.054c.05 0 .093.017.126.046.033.028.058.081.072.16.015.08.022.29.022.634v2.736c0 .189-.013.316-.042.381a.295.295 0 0 1-.118.142c-.053.031-.147.045-.286.045v.12h1.481v-.12c-.154 0-.261-.017-.32-.048a.29.29 0 0 1-.126-.142c-.026-.06-.04-.187-.04-.378V8.927zm-11.722.34c-.33 0-.608.05-.84.147-.233.1-.411.246-.534.436a1.083 1.083 0 0 0-.185.612c0 .338.131.627.393.864.184.167.507.309.968.422.358.091.587.153.688.191a.7.7 0 0 1 .31.183c.058.07.088.158.088.259 0 .155-.07.291-.21.41-.142.116-.35.176-.628.176-.262 0-.47-.066-.625-.197-.154-.132-.255-.339-.307-.619L0 12.23c.056.48.228.845.517 1.096.289.252.704.378 1.244.378.371 0 .68-.054.93-.156a1.263 1.263 0 0 0 .781-1.169 1.29 1.29 0 0 0-.171-.684 1.203 1.203 0 0 0-.472-.437c-.2-.107-.508-.21-.927-.31-.418-.098-.683-.193-.79-.286a.326.326 0 0 1 .009-.524c.14-.105.336-.156.586-.156.24 0 .422.049.542.145.122.097.199.256.237.471l.864-.028c-.013-.395-.154-.71-.425-.949-.271-.235-.674-.353-1.208-.353zm21.808.33a.475.475 0 1 0-.002.95.475.475 0 0 0 .002-.95zm0 .072a.4.4 0 0 1 .401.403c0 .116-.05.22-.128.294l-.086-.135a.396.396 0 0 0-.065-.078.212.212 0 0 0-.048-.03.2.2 0 0 0 .127-.057.144.144 0 0 0 .043-.109.178.178 0 0 0-.025-.091.125.125 0 0 0-.067-.055.309.309 0 0 0-.123-.02h-.266v.606h.08v-.268h.091c.02 0 .036.001.045.003.013.004.025.007.036.014.013.01.024.023.04.043.015.019.035.049.059.083l.08.125h.043a.396.396 0 0 1-.237.08.405.405 0 0 1-.404-.405c0-.224.18-.403.404-.403zm-.157.191h.191c.044 0 .077.01.097.027a.089.089 0 0 1 .03.07.09.09 0 0 1-.016.055.076.076 0 0 1-.047.035.196.196 0 0 1-.085.013h-.17zm-15.037.6c-.41 0-.752.17-1.023.514v-.455h-.754v3.105h.814v-1.401c0-.348.022-.583.063-.713a.583.583 0 0 1 .234-.306.666.666 0 0 1 .385-.118c.11 0 .208.028.287.082.08.054.135.13.17.229.037.099.054.314.054.646v1.581h.816V11.7a2.54 2.54 0 0 0-.046-.55.925.925 0 0 0-.16-.343.83.83 0 0 0-.341-.25 1.285 1.285 0 0 0-.499-.097zm2.65 0a1.7 1.7 0 0 0-.826.2 1.39 1.39 0 0 0-.571.586 1.684 1.684 0 0 0-.202.793c0 .356.068.657.202.904.134.25.33.438.588.566.259.129.53.194.814.194.46 0 .841-.156 1.144-.463.303-.31.455-.698.455-1.167 0-.465-.15-.85-.451-1.156-.3-.305-.683-.457-1.154-.457zm7.315.05c-.351 0-.64.108-.865.323a1.02 1.02 0 0 0-.336.77c0 .194.05.371.147.534.1.162.24.285.423.379-.223.187-.366.335-.429.44a.55.55 0 0 0-.092.271c0 .068.024.13.071.184.046.056.127.116.24.187a9.626 9.626 0 0 0-.329.355c-.113.145-.19.253-.226.336a.41.41 0 0 0-.034.157c0 .12.081.232.246.343.291.19.649.284 1.071.284.55 0 .996-.16 1.337-.477.232-.216.35-.45.35-.694a.613.613 0 0 0-.183-.45.838.838 0 0 0-.49-.227 8.478 8.478 0 0 0-.878-.053 4.257 4.257 0 0 1-.46-.027c-.105-.015-.177-.04-.212-.075-.038-.037-.056-.072-.056-.112a.37.37 0 0 1 .05-.159.868.868 0 0 1 .186-.221c.156.049.309.07.459.07.36 0 .648-.1.864-.301a.956.956 0 0 0 .323-.722c0-.247-.062-.45-.187-.61h.394c.097 0 .15-.002.167-.01a.056.056 0 0 0 .035-.025.289.289 0 0 0 .018-.12.214.214 0 0 0-.02-.105.083.083 0 0 0-.033-.028.83.83 0 0 0-.166-.008h-.639a1.307 1.307 0 0 0-.746-.21zm-2.752 0c-.252 0-.49.065-.714.194a1.437 1.437 0 0 0-.546.61 1.816 1.816 0 0 0-.205.825c0 .381.114.724.34 1.03a1.29 1.29 0 0 0 1.09.543c.28 0 .532-.07.76-.211.23-.14.409-.35.54-.627.13-.276.194-.55.194-.821 0-.385-.118-.725-.354-1.022a1.344 1.344 0 0 0-1.105-.522zm-12.182.009l1.174 3.113a1.193 1.193 0 0 1-.21.431c-.09.112-.23.167-.419.167-.102 0-.218-.013-.344-.04l.067.645c.152.033.307.052.464.052.155 0 .294-.019.418-.052a1.04 1.04 0 0 0 .31-.138.862.862 0 0 0 .224-.234 2.2 2.2 0 0 0 .205-.414l.199-.545 1.085-2.985h-.844l-.722 2.204-.74-2.204zm16.631.078v.122a.84.84 0 0 1 .245.091c.035.029.08.08.136.157.072.102.125.186.158.255l1.088 2.275-.213.526c-.079.194-.158.326-.236.393-.08.068-.15.104-.217.104a.878.878 0 0 1-.167-.05.924.924 0 0 0-.3-.07c-.105 0-.19.025-.25.084a.286.286 0 0 0-.092.22c0 .098.042.183.126.257a.457.457 0 0 0 .322.112c.18 0 .366-.072.56-.223.193-.15.35-.37.469-.664l1.226-3.014a1.6 1.6 0 0 1 .113-.254.55.55 0 0 1 .145-.146.473.473 0 0 1 .188-.053v-.122h-.978v.122c.093 0 .16.008.197.023a.172.172 0 0 1 .083.057.146.146 0 0 1 .023.087c0 .091-.019.18-.056.271l-.675 1.671-.737-1.53c-.074-.15-.11-.268-.11-.356a.21.21 0 0 1 .074-.16.346.346 0 0 1 .224-.063h.068v-.122zm-1.753.08c.175 0 .316.074.43.217.15.196.224.466.224.815 0 .265-.053.46-.16.584a.516.516 0 0 1-.41.188.528.528 0 0 1-.43-.216c-.149-.19-.223-.458-.223-.802 0-.268.054-.461.163-.59a.515.515 0 0 1 .406-.197zm-2.798.054c.242 0 .44.102.598.312.23.308.346.727.346 1.263 0 .429-.07.73-.209.905a.646.646 0 0 1-.528.264c-.286 0-.516-.161-.691-.477-.174-.32-.263-.695-.263-1.135 0-.272.037-.493.11-.669a.731.731 0 0 1 .285-.361.667.667 0 0 1 .352-.102zm-4.463.395c.216 0 .396.084.543.247.144.162.216.397.216.703 0 .311-.072.55-.216.712a.695.695 0 0 1-.543.248.695.695 0 0 1-.542-.248c-.147-.161-.22-.398-.22-.708 0-.308.073-.545.22-.707a.704.704 0 0 1 .542-.247zm6.66 2.498c.265.036.647.065 1.142.08.34.007.566.034.68.083.113.048.17.13.17.241 0 .157-.094.304-.282.442-.19.138-.48.208-.874.208-.414 0-.732-.07-.951-.204-.128-.078-.19-.168-.19-.277 0-.078.024-.169.076-.26a1.51 1.51 0 0 1 .228-.313z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSynologyIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
