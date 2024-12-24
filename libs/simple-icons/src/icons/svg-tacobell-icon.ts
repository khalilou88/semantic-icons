import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tacobell-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Taco Bell</title>
      <path
        d="M12.0786 1.1372a11.784 11.784 0 0 0-.913.0318c-1.4967.0794-2.9562.5037-4.3208 1.1086.2802-.0007.588-.0477.839.1086.3087.1709.4496.527.7445.711.4187.1627.8696.0071 1.2965-.0398 1.3661-.1587 2.7779.1102 4 .7387.788.4146 1.4997.9613 2.1525 1.5639 1.005.8835 1.831 1.9475 2.8264 2.8416.3247.2891.698.5257 1.1037.6836.9484.3725 1.9971.3434 2.9528.6917.3012.1013.571.2697.844.43-.1644-.537-.3395-1.0706-.5622-1.5858-.9824-2.3169-2.7202-4.2993-4.8793-5.5886-1.8269-1.1034-3.9525-1.6866-6.084-1.6953ZM4.988 3.4001C3.2443 4.6465 1.8497 6.3764.9985 8.3427.3013 9.93-.0243 11.6703.004 13.4009c.0008 2.9948.0057 5.9897-.0024 8.9845-.0154.163.0834.3006.1507.4407 1.158.0714 2.3218.0137 3.4823.0307-.5701-.2073-1.2237-.5473-1.3338-1.2082-.1799-.9524.2786-1.878.7702-2.6637.7888-1.2277 1.8336-2.2634 2.9106-3.2377 1.3071-1.1322 2.7534-2.0919 4.2371-2.9754.3977-.256.8553-.4575 1.1412-.8504-.26.0219-.5151.0858-.7516.196-.9872.4292-1.9234.9662-2.8458 1.5192-.8804.545-1.767 1.0845-2.5948 1.709-.579.4146-1.1191.8777-1.6796 1.3166-.1238-.9402-.3483-1.8625-.584-2.7801-.2892-1.2188-.477-2.475-.396-3.7302.06-1.2853.4697-2.5616 1.2342-3.6022.294-.4309.699-.7751.9776-1.2165.2396-.3774-.1208-.7677-.09-1.1613-.0056-.3005.1936-.5402.358-.7718zm15.5597 8.8498c-.1674-.0026-.3357.011-.498.028-1.316.161-2.5736.6137-3.7973 1.1052-2.7414 1.1517-5.3888 2.5755-7.7414 4.4042-.9378.7499-1.8651 1.5443-2.5592 2.5332-.2097.3296-.473.733-.324 1.1363.1912.2656.5474.3125.8495.353 1.056.094 2.1147-.0777 3.1456-.298 2.0806-.473 4.0946-1.257 5.9234-2.3584 1.3743-.7945 2.7032-1.6796 3.8954-2.7299.6688-.6066 1.3126-1.2602 1.7734-2.0433.213-.3758.401-.7872.392-1.2286.0025-.2486-.0236-.5595-.2648-.6971-.2394-.1514-.5155-.2003-.7946-.2046zm3.4259.0756c-.7889 1.993-2.3518 3.549-3.9691 4.8981-1.41 1.1436-2.9463 2.1275-4.5562 2.9648-2.185 1.2196-4.5369 2.177-6.999 2.6596 5.035.022 10.0706.004 15.1055.0088.226.0316.4575-.1425.4413-.3806.0066-2.8644 0-5.7288.0026-8.5933.0016-.5191.0073-1.0391-.0251-1.5573zM12.7172 15.757c.3604.7702.4009 1.6967.0543 2.4782-.3208.7686-.984 1.375-1.7687 1.6472-1.0505.362-2.276.0818-3.0656-.7014 1.4019-1.3824 3.0598-2.478 4.78-3.424z"
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
export class SvgTacobellIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
