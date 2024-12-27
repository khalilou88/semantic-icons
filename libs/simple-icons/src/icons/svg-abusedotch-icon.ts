import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-abusedotch-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>abuse.ch</title>
      <path
        d="M22.8924 10.3775c.0193 0 .1179-.1827.3828-.2534.1078-.0287.3585-.0506.5405.0957.14.1127.1843.2965.1843.4838v1.127h-.2747V10.748c0-.362-.1831-.4094-.3296-.4094-.2709 0-.444.2105-.5033.296v1.1961h-.2746v-2.566h.2746zm-.9543.0514c-.189-.072-.391-.1213-.6007-.0514-.1745.0582-.2643.1976-.3101.3154-.032.084-.0479.1885-.0479.3137 0 .1758.0436.332.1436.4519.1925.2208.5373.2171.8417.0921v.2286c-.066.0388-.1671.0616-.186.0656-.088.0215-.5326.111-.8418-.179-.3632-.3404-.2155-.937-.2109-.9551.038-.1422.1081-.2924.2357-.4058.348-.3025.805-.2036.9764-.1046zm-5.9987 2.7958h1.7657v.5501h-2.423v-3.5904h2.3264v.5501h-1.669v.9285h1.4329v.55h-1.433zm-2.2842-.4803c0-.3335-.317-.4122-.8104-.5125a4.1973 4.1973 0 0 1-.3998-.1074c-.3907-.132-.5171-.3607-.5662-.4588-.1187-.2373-.1168-.6487.0134-.9231.2446-.5224.7924-.6253 1.186-.6253.444 0 .8488.1051 1.0761.2013v.5635c-.186-.0733-.365-.1261-.5367-.1583-.2899-.058-1.1565-.181-1.1565.4213 0 .0776.0048.2482.2146.373.2305.1308.4677.1222.9366.2683.1395.0412.263.0993.3703.1744.1073.0752.1923.1736.2549.2952.0626.1199.0939.2737.0939.4616 0 .3168-.1006.6336-.4132.8533-.3229.2255-.7791.271-1.0949.271-.3327 0-.7674-.0646-1.0465-.22v-.5555c.3126.1358.6309.22 1.0385.22.3188 0 .8399-.0718.8399-.542zm-5.2521.8855c-.5869-.3576-.5957-1.0336-.5957-1.331v-2.1145h.6574V12.24c0 .242.0154.7371.3891.9419.2631.1406.66.1406.923 0 .374-.2048.3892-.7003.3892-.9419v-2.0555h.6574v2.1146c0 .1502-.0089.2862-.0268.4078-.036.2726-.1623.6781-.577.9231-.4836.2828-1.3341.2865-1.8166 0zm-1.6215-2.4902c0 .1557-.0348.2988-.1046.4294-.0698.1288-.1852.2361-.3462.322v.0107c.1734.059.4509.1987.5582.5072.077.2086.0707.5612-.1422.8506-.0698.093-.1628.179-.2791.2576-.3154.2135-.7248.2434-.9768.255-.4364.0058-.873.0027-1.3095.0027v-3.5904h1.2478c.2853 0 .6671.0247.9607.2361.2757.193.3917.4718.3917.7191zM4.839 12.2131v1.0116h.4293a4.68 4.68 0 0 0 .2952-.008c.2888-.0252.5883-.114.6681-.3622.018-.0576.1233-.455-.3193-.5957-.1148-.0357-.2588-.0457-.4508-.0457zm.593-.5501c.1444 0 .4811-.0001.6091-.2227.0837-.143.0917-.3476-.008-.4991-.1227-.191-.418-.2067-.6548-.2067H4.839v.9285zm-4.0061-1.4794L0 13.7736h.7012c.2284-.5948.457-1.1895.6855-1.7843.0984-.252.2107-.5654.336-.9409h.0117c.3084.92.6724 1.8201 1.0215 2.7252h.6953l-1.4258-3.59zm17.604 5.3065h.2932V8.51h-.2932z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAbusedotchIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
