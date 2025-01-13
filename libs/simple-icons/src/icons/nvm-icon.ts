import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nvm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>nvm</svg:title>
    <svg:path
      d="m7.178 7.98-.1986.004a.045.045 0 0 0-.0376.0684l.104.1715a.045.045 0 0 0 .0394.0216l.1986-.004a.045.045 0 0 0 .0376-.0684l-.104-.1715a.045.045 0 0 0-.0394-.0217m-1.2178.0846-.1625.0036a.045.045 0 0 0-.0375.0683l.085.1405a.045.045 0 0 0 .0396.0218l.1625-.0036a.045.045 0 0 0 .0376-.0684l-.0852-.1405a.045.045 0 0 0-.0395-.0217m.7111.3967-.281.0058a.045.045 0 0 0-.0375.0683l.1711.2824a.045.045 0 0 0 .0395.0218l.281-.006a.045.045 0 0 0 .0376-.0683l-.1712-.2823a.045.045 0 0 0-.0395-.0217m.843.2485-.3526.0077a.045.045 0 0 0-.0375.0684l.1846.3053a.045.045 0 0 0 .0395.0217l.353-.0077a.045.045 0 0 0 .0376-.0684l-.185-.3052a.045.045 0 0 0-.0396-.0218m8.7293.1253c-.076-.0006-.152.0215-.231.067q-1.3417.7729-2.6863 1.541l.1055-.1788c.0693-.1576.027-.2242-.1445-.2242-.6025-.0005-1.205.0008-1.8076-.0014-.0887-.0005-.145.0315-.189.109-.2027.357-.409.712-.6152 1.0672h-.0004c-.2714.468-.8423 1.4118-.9034 1.5135v.0003l-1.034 1.8842.0009-.0025-.0012.0025c.08.1268.1693.2628.2575.3978l.0413.065.0015.0011c.1298.1982.26.3967.3783.5821-.1306-.2098.114.1486.1918.231.1621.172.2995.1743.4607.0023.0635-.068.1193-.144.1738-.2197.2508-.3499.4688-.7205.6872-1.0907.4539-.769.8956-1.5454 1.3432-2.3182.2004-.3458.4035-.6898.6057-1.0348.0102-.0194.0211-.0383.0314-.0576.0031 1.4098.0034 2.82.006 4.2297.0005.25.1185.318.3337.1954.543-.3089 1.0839-.6227 1.6288-.9289.171-.0964.2467-.227.2445-.4256-.0072-.6543.0018-1.3081-.0055-1.9624-.0027-.2247.0824-.376.2814-.4795.2022-.105.399-.2212.593-.34.1671-.1023.3248-.1063.4932-.0027.194.1193.3904.236.593.3395.2072.1063.2895.2653.2873.495-.0068.6425.004 1.285-.0058 1.9272-.0036.2202.0806.3593.2702.4647.521.2896 1.0361.589 1.5535.8844.2833.1617.3823.1054.3832-.2179.0027-1.0573.0072-2.1143.004-3.1716-.0004-.1612.0613-.266.1941-.3422.2283-.1306.4562-.2612.6836-.3936.1513-.0882.2972-.0832.4471.0063.2004.1194.4008.241.6084.3477s.2891.2657.2869.4953c-.0068.6426.004 1.2852-.006 1.9273-.0035.2206.0815.3598.2707.4647.526.2923 1.0465.5944 1.5693.8921.2616.149.3661.0905.3665-.209.001-.73 0-1.4603 0-2.1903h.0072c0-.73-.003-1.4603.0018-2.1902.0014-.2085-.0766-.3509-.2607-.4553a313 313 0 0 1-2.7964-1.6053c-.1946-.113-.3638-.1113-.5566.0022-.5989.3526-1.2055.6921-1.8058 1.043-.0932.054-.1589.0544-.2526 0-.616-.359-1.2365-.7093-1.8534-1.0664-.0788-.0457-.1548-.0691-.2309-.0697zm-12.9129.0017c-.0803.0008-.1604.0264-.2455.0757A334 334 0 0 1 .2735 10.526c-.1968.1116-.276.259-.2734.4827.0081.7183.0032 1.4365.0032 2.1547h.0045c0 .7358-.001 1.4716 0 2.2074.0004.2918.113.354.3701.2071.5224-.2985 1.0415-.6016 1.568-.8934.1909-.1058.2733-.2444.2701-.4642-.009-.6538-.0013-1.3081-.0045-1.962-.0009-.1927.0649-.3364.2396-.4318.2256-.1234.4471-.2536.6687-.3837.145-.0852.286-.0837.4305.0014.2067.121.4111.2467.624.3557.209.1072.286.2684.2838.4967-.0068.648.0023 1.2964-.0049 1.9444-.0023.2062.0792.3368.2571.4359.5305.2958 1.056.6012 1.5833.9024.2553.146.3647.0824.3651-.2143.003-1.338.0037-2.6762.008-4.0142l2.0724 3.2579.7471-2.3635.121.2048-.301-.5165-.0796-.1373-.1828-.314a.045.045 0 0 0-.045-.0219l-.7254.0981-.0622-.113-.0005-.001-.2337-.4008a.045.045 0 0 0-.0395-.0223l-.258.0032a.045.045 0 0 0-.0384.0676l.0316.0543-.5535.0031-.131-.2256a.045.045 0 0 0-.0393-.0224l-.2862.0021c-.019-.1645-.1007-.2811-.2593-.3713a358 358 0 0 1-2.8265-1.623c-.0856-.0495-.166-.0734-.2462-.0725m2.8363.0235-.237.0049a.045.045 0 0 0-.0375.0683l.1442.2378a.045.045 0 0 0 .0395.0217l.2368-.0049a.045.045 0 0 0 .0376-.0683l-.1441-.2378a.045.045 0 0 0-.0395-.0217m.5498.4138-.2494.0055a.045.045 0 0 0-.0376.0683l.1305.2157a.045.045 0 0 0 .0395.0217l.2495-.0054a.045.045 0 0 0 .0376-.0684l-.1306-.2157a.045.045 0 0 0-.0395-.0217m.7551.0396-.3656.0077a.045.045 0 0 0-.0375.0684l.191.3156a.045.045 0 0 0 .0393.0217l.2244-.0044.1761.2907a.045.045 0 0 0 .0395.0217l.5196-.0108a.045.045 0 0 0 .0376-.0683l-.3165-.5224a.045.045 0 0 0-.0395-.0217l-.3775.008-.0515-.0845a.045.045 0 0 0-.0394-.0216zm-1.3612.0797-.199.004a.045.045 0 0 0-.0376.0684l.104.1715a.045.045 0 0 0 .0395.0218l.1986-.004a.045.045 0 0 0 .0375-.0684l-.1035-.1715a.045.045 0 0 0-.0395-.0218m.6017.459-.2882.0057a.045.045 0 0 0-.0377.0684l.1757.29a.045.045 0 0 0 .0395.0217l.077-.0017.15.2479a.045.045 0 0 0 .0395.0217l.4724-.0099a.045.045 0 0 0 .0376-.0683l-.2878-.4746a.045.045 0 0 0-.0394-.0217l-.261.0053-.0383-.0629a.045.045 0 0 0-.0393-.0216m1.925.643-.6449.014a.045.045 0 0 0-.0376.0683l.128.2108a.045.045 0 0 0 .0394.0216l.1713-.0035.1054.1733a.045.045 0 0 0 .0394.0216l.4472-.0095a.045.045 0 0 0 .0376-.0683l-.2464-.4066a.045.045 0 0 0-.0395-.0217z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNvmIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F4DD4B');
}
