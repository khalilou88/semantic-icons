import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pegasusairlines-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pegasus Airlines</title>
      <path
        d="M10.5113 12.1013l-.5743 1.331H8.77l-.0493-.0901c-.3208.1335-.5936.1852-.9663.1852-.5925 0-1.0767-.4802-1.0767-1.0725 0-.0367.0004-.0731.0042-.1085.1518-1.3041 1.2565-2.3233 2.6013-2.3233.648 0 1.0171.1195 1.559.3832l-.1432.3418c-.0273.0667-.1053.1137-.1661.0842-.0643-.0292-.0496-.0689-.08-.1344-.0498-.1077-.1157-.1419-.1577-.1709-.2104-.1327-.3523-.1377-.4959-.1377-.3395 0-.6469.1272-.8821.337-.5085.4506-.8634 1.058-.9629 1.7978-.0438.2834.1802.5511.4678.5486.3227 0 .4995-.1865.6234-.4626l.2272-.5333c.0277-.0679-.0437-.1262-.0727-.13-.0487-.0189-.0808-.058-.0808-.1058 0-.0659.051-.1193.143-.1193l1.4158.0002c.0845-.0048.147.0872.113.1654-.0158.0401-.0473.0619-.1027.0687-.0997.0158-.1398.0582-.177.1453zm-3.9695-.6931a.1543.1543 0 0 0-.1314.0752c-.0485.0777-.0951.0859-.1759.0915l-.7152.0008.4796-1.1131h.8508c.0485-.0028.0746.0544.071.0821-.0017.0525.0231.0968.067.1159.0605.026.1348-.0118.1659-.0842l.2035-.4714h-2.701c-.092 0-.1468.0506-.1468.1163 0 .0481.0309.0884.0798.1073.042.0092.0983.0712.0752.1314l-1.2877 2.9854h2.9656l.1661-.3817c.0374-.076-.0232-.171-.1083-.1688a.1547.1547 0 0 0-.1314.0752c-.0535.0857-.118.1182-.2127.1182l-1.1895-.0008.5083-1.1807.7849.0006c.0468.0021.0659.0563.0638.0817-.0019.0523.0111.0968.0552.1157.0605.0258.135-.0118.1661-.0846l.1938-.4433c.0339-.0722-.0126-.1714-.0967-.1687zm-3.7169.7215h-.9761l-.4319 1.0146c-.0157.0281.0052.0631.0321.0743.0491.0187.08.0592.08.1069 0 .0661-.064.1195-.1432.1195H0l1.2982-3.0181c.0188-.0439-.0231-.0869-.0489-.0948-.0487-.0189-.08-.0592-.08-.1073 0-.0657.0643-.1191.1434-.1191.5136-.0003 1.7208-.0002 2.2211.0025.2461 0 .4636.1449.5543.3576.0519.1293.079.2692.079.4174 0 .2331-.0718.4495-.1934.6289-.2606.3862-.6877.6176-1.1488.6176zm.0168-1.613c-.0621-.0457-.205-.0606-.27-.0535l-.5476 1.2722.2138-.0013c.2719-.0019.4907-.1547.6412-.3998.1986-.3227.1818-.6887-.0374-.8176zm18.6699-.1285c.0552-.0067.0867-.0286.1027-.0687.0334-.0778-.0281-.1701-.1132-.1652l-1.3392-.0002-1.1658 2.7034a.4988.4988 0 0 1-.4577.3003c-.0403 0-.0876-.0128-.1249-.0216-.1258-.0334-.2219-.1436-.2219-.2986.0067-.1974.1262-.4812.1894-.6282l.7254-1.6735c.0372-.0874.0762-.1319.1762-.1476.0552-.0067.0867-.0286.1027-.0687.0334-.0777-.028-.17-.113-.1652h-1.4631c-.0789 0-.143.0533-.143.1193 0 .0479.0309.0882.0796.1071.0258.0077.0678.0512.0491.0945l-.5258 1.2178c-.1327.2845-.2091.6064-.2161.9381 0 .3233.1865.6037.4556.7422.2849.1367.6005.2137.9354.2137a2.3863 2.3863 0 0 0 2.2267-1.5181l.6624-1.5317c.0374-.0876.0786-.1334.1785-.1491zm1.1967-.3589c-.8626.0603-1.3988.6858-1.3482 1.4087.0181.2572.1119.4917.2553.6853 0 0 .6433.7727.6814.822.0223.0307.0827.1218.089.2116.0166.2392-.1042.4378-.4107.4594-.3559.025-.6517-.1283-.7807-.3578-.0202-.057-.0163-.1273-.0829-.1461-.0592-.0206-.1272.0202-.152.0909l-.1447.4132c.3229.2488.7532.3931 1.2955.354.8626-.0605 1.3988-.6858 1.348-1.4083-.0176-.2576-.1915-.4869-.3349-.6801-.1046-.1284-.4105-.4944-.5209-.6266-.0797-.1144-.1584-.2415-.1718-.3853-.0174-.2499.1537-.4655.4603-.4869.354-.025.6005.1228.7313.35.0198.0571.016.1273.0829.1461.0592.0206.127-.0202.1518-.0909l.143-.4064c-.3231-.2486-.7496-.3918-1.2917-.3528zm-5.6636.8504c-.067-.0189-.0631-.0891-.0831-.1461-.1308-.2272-.3773-.375-.7311-.35-.3068.0214-.4779.2371-.4607.4869.014.1437.092.2709.1722.3853.1119.1339.4147.4965.5205.6266.1438.1932.3173.4225.3353.6801.0504.7225-.4859 1.3478-1.3482 1.4083-.5424.0391-.9728-.1052-1.2957-.354l.0604-.1726h-1.3956c-.0792 0-.1419-.0527-.1419-.1186 0-.0479.0309-.0882.0796-.1069.0252-.0084.0656-.0475.0508-.0915l-.2308-.9879H11.528l-.6066.9827c-.0221.0454.0234.0855.0479.0941.0489.0189.0802.0588.0804.1069.0004.0657-.0634.1195-.1424.1199l-.6226.0015c-.0846.0042-.1492-.0882-.1138-.1659.0193-.046.0609-.063.1163-.0697.0781-.0126.1178-.0422.1543-.0968l1.8998-3.0053 1.1637-.0002c.079 0 .1428.0548.1428.1207 0 .0479-.0311.0882-.0798.1071-.021.0094-.0527.0311-.0517.0743l.7032 3.0205.0789-.2254c.0252-.0708.093-.1115.152-.0909.043.0151.0695.0554.0712.1054a.0869.0869 0 0 0 .012.0407c.1289.2295.4248.3828.7807.3578.3066-.0216.4273-.2203.4105-.4594-.0063-.0899-.0668-.181-.089-.2116-.038-.0493-.6811-.822-.6811-.822-.1434-.1936-.2373-.4281-.2553-.6853-.0506-.7229.4857-1.3484 1.3482-1.4087.5424-.039.9688.1042 1.2915.3528l-.1428.4067c-.0247.0704-.0928.1111-.1516.0905zm-4.562.8538l-.1919-.8304-.5125.8304h.7044z"
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
export class SvgPegasusairlinesIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
