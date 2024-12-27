import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-proteus-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Proteus</title>
      <path
        d="M3.4051 4.799c0-.6655.5397-1.2051 1.2052-1.2051s1.2052.5396 1.2052 1.2052c0 .0037-.002.0068-.0021.0105.6943.2851 1.4968.776 2.1966 1.2557.404.277.8184.5853 1.2354.9068-.1488.0862-.2953.1743-.426.2674l-.0673.048c-.34-.2577-.6797-.5123-1.0096-.7385C6.79 5.8961 6.123 5.5426 5.662 5.3552c-.1757.3306-.4955.5571-.88.6143.154.58.5529 1.366 1.1504 2.2896l.7181 1.0453c.1443.199.3067.4082.4636.6143.1975.2596.4063.525.6218.7934.0459.057.0926.1143.1393.1716.1894.2332.3847.4688.5868.7068.116.1362.2366.2737.3566.4111.1533.1763.3054.352.4651.5298.299.3319.6053.6654.9244.9997.2949.3091.5976.6089.9002.9073-.2669-.0057-.534-.0105-.7977-.0213a42.315 42.315 0 0 1-.4966-.51c-.4947-.5184-.9558-1.0318-1.4002-1.5404a44.4174 44.4174 0 0 1-.2897-.3354c-.4261-.4974-.8328-.9881-1.2026-1.463l-.0016-.002c-.3052-.392-.5937-.776-.8567-1.1459l-.0006.0001-.0077-.0113c-.003-.0044-.0068-.009-.0099-.0133l.0008-.0001-.1281-.1904-.1413-.2097-.3963-.5883c-.633-.9963-1.048-1.849-1.202-2.4905-.4506-.1744-.773-.6056-.773-1.1178zm15.292 13.2427c-.3277-.8145-.9133-1.8048-1.6373-2.8438-.1986.0293-.4067.0528-.6108.0789.7763 1.1025 1.3413 2.0677 1.6562 2.7927-.4707.152-.8131.5726-.832 1.0893-.6327-.267-1.4611-.762-2.418-1.468-.737-.5438-1.5182-1.1992-2.3035-1.9031a54.784 54.784 0 0 1-.4126.3664c2.0873 1.8717 4.0796 3.26 5.3385 3.6912.215.3298.5693.5608.9923.5608.6656 0 1.2052-.5395 1.2052-1.2051 0-.5851-.4252-1.0499-.978-1.1593zm-6.1818-2.4915a10.5432 10.5432 0 0 0-.2286.006c-.1007.0037-.2013.008-.3021.008-.0975 0-.1918-.0059-.289-.0065-.1271.1114-.2496.2096-.3755.3171a36.746 36.746 0 0 1-.8212.684l.0013.0003c-1.5544 1.251-2.9273 2.1365-3.842 2.5257 0-.0016.001-.0028.001-.0044 0-.5293-.3466-.9657-.8212-1.1276.2694-.6066.6953-1.3508 1.2896-2.2061.0993-.1429.2175-.294.3234-.4398-.2083-.0241-.4229-.0452-.6245-.0723-.7207 1.0148-1.2719 1.9393-1.5923 2.685-.5565.1066-.9854.5732-.9854 1.1608 0 .6656.5396 1.2052 1.2052 1.2052.3973 0 .7328-.205.9523-.5015 1.5528-.4942 4.027-2.3594 6.109-4.2339zm-5.664-4.6696a5.1697 5.1697 0 0 0-.0566.7578c0 .9375.2618 1.8091.6994 2.5662.062.0074.119.0169.1815.024.7378.0831 1.5005.1402 2.2768.179-.1066-.1088-.2135-.217-.3192-.3278-1.0172-1.066-1.9556-2.1502-2.7818-3.1992zm8.1693-3.3744c.2686.2001.5185.424.7431.6717.1871.2063.3567.4285.5087.6631.1858.2867.3327.5988.4595.9209-.6217.835-1.3012 1.6632-1.999 2.4467-.121.1357-.2404.2732-.3622.4057a30.224 30.224 0 0 1-.7613.8 40.0852 40.0852 0 0 1-.8573.8379l-.2022.1924c-.189.003-.3759.017-.5653.017-.1727 0-.3388-.0114-.5104-.0135l-.1904-.1877c-.3007-.2967-.6017-.5946-.8949-.9019a45.099 45.099 0 0 1-.7263-.783 43.538 43.538 0 0 1-.3657-.4083c-.7586-.8544-1.4649-1.7107-2.0874-2.5373.1081-.2542.23-.5012.3758-.7326a5.1611 5.1611 0 0 1 .5092-.6784c.2586-.2911.5522-.5493.87-.7758a5.1451 5.1451 0 0 1 .493-.3094c.7384-.4093 1.5851-.6474 2.4894-.6474.9462 0 1.8328.2552 2.5948.7003a5.166 5.166 0 0 1 .479.3196m-.9201 6.8916a33.7491 33.7491 0 0 0 2.1308-.1939c.0635-.0079.1213-.0194.1843-.0276.4277-.7507.6833-1.612.6833-2.5379 0-.1966-.021-.3877-.0425-.5786-.8503 1.0858-1.7729 2.1483-2.7046 3.0896-.0805.0812-.167.1652-.2513.2484zm-1.4447 1.1489c.3586.3226.7121.6338 1.0523.918.6598-.2425 1.2618-.604 1.7643-1.0768-.9283.0911-1.8717.1395-2.8166.1588zm-1.2003 1.1964c.1639.0159.3231.0475.4913.0475.1633 0 .3177-.0316.4771-.0465-.1558-.1355-.3154-.2854-.4727-.4263-.153.1332-.318.275-.4957.4253zm-3.0121-1.335c.5032.468 1.1047.825 1.763 1.0638.352-.2805.7146-.5802 1.09-.9038l-.0005-.0099.0067-.0094c-.9745-.017-1.9343-.0598-2.8592-.1407zM15.17 7.3057l.0569.0423c1.2568-.9717 2.3588-1.6635 3.1438-1.9497.1728.3392.4982.5716.8884.6309-.148.4568-.4793 1.1684-1.1632 2.2364l-.6367.9297c-.1963.2796-.409.5625-.6213.8451-.4366.5809-.9059 1.1628-1.391 1.7327-.0595.0695-.12.1378-.18.207-.48.555-.9742 1.0994-1.4798 1.6102-.287.29-.575.5691-.8627.843.2702-.0072.5407-.0111.8094-.0244a36.253 36.253 0 0 0 .4404-.4354c.46-.4647.9096-.9581 1.3514-1.4604a37.509 37.509 0 0 0 .2472-.2859c.4272-.496.8412-.9985 1.2334-1.5061l.0014-.0017c.3653-.4731.718-.946 1.0405-1.4123l.6296-.9325c.501-.795.9901-1.6879 1.19-2.3977.4501-.1748.7715-.6058.7715-1.1176 0-.6656-.5395-1.2052-1.2051-1.2052-.662 0-1.197.5342-1.203 1.1947-.9004.3423-2.1135 1.107-3.4811 2.1767.1372.0839.2742.1716.42.2802zm.941.9155c.1281.1564.2589.3104.3712.4838l.122.188c.233.0324.454.075.6828.1113l.3803-.5553c-.5083-.0847-1.0258-.164-1.5563-.2278zm-8.3719.056c-.453.0637-.8929.1472-1.3344.2278l.3714.5407c.1601-.028.3143-.0627.476-.0885l.1216-.1932c.1083-.1719.2387-.328.3654-.4867zm16.239 3.1232c-.2514-1.2987-2.5312-2.1148-4.3994-2.5707-.2506-.0612-.5305-.1094-.7955-.1646l-.3626.5371c.4351.0867.864.1775 1.2647.2824 2.2145.5793 3.5636 1.3194 3.7012 2.0304.039.2012-.031.407-.214.6288-.5461.6619-1.9944 1.3135-3.9736 1.7878-.8763.21-1.8361.3783-2.8395.5058-.0321.0051-.064.0104-.0973.0146a34.0673 34.0673 0 0 1-2.1084.1935c-.227.0139-.4584.0114-.687.021-.2716.0113-.191.0197-.464.0248h-.3523c-.2264.0247-.5233.0203-.7462.0203-1.5226 0-2.9098-.0829-4.2566-.2347-3.2265-.3637-5.76-1.1231-6.695-2.088-.2397-.247-.3573-.4964-.3496-.741.0116-.3722.7711-1.2159 3.5442-2.0175.4803-.1388.9839-.2633 1.5028-.375l-.3534-.5246c-.4477.1006-.8982.1997-1.3167.3207C2.5106 9.4763.0398 10.376.0007 11.629c-.013.4138.1617.8106.5191 1.1795 1.0945 1.1291 3.9797 1.979 7.6472 2.3296 1.2005.1148 2.526.175 3.8589.175.0139 0-.014 0 0 0 .2593-.0014.5138-.0146.7716-.0206 1.0077-.023 2.0027-.0758 2.951-.1772.184-.0197.3583-.0469.539-.0693.1413-.0174.2813-.0358.4214-.0542 3.3329-.4575 6.0209-1.3645 6.9284-2.4645.3004-.3642.415-.7433.3408-1.127z"
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
export class SvgProteusIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
