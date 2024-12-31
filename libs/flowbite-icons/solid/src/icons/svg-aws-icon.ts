import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-aws-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7.70858 10.176c-.0059.1918.02016.3833.07716.567.05635.1582.12675.3114.21041.4577.02989.0424.04691.0921.04909.1435-.00368.0394-.01708.0774-.03906.1107-.02198.0333-.05189.0609-.08718.0806l-.41382.2664c-.04921.0342-.10786.0533-.16833.0546-.03729-.0006-.07404-.0088-.10786-.0241-.03383-.0153-.06399-.0373-.08852-.0647-.09084-.0886-.17086-.1872-.23847-.2937-.06312-.1093-.12625-.2323-.19638-.3758-.23007.28-.52286.505-.85597.6577-.3331.1528-.69768.2293-1.0658.2236-.23782.0125-.47581-.0215-.69988-.1002-.22407-.0786-.42969-.2002-.60468-.3575-.16281-.1601-.28937-.3516-.37152-.5622s-.11806-.4357-.10542-.6607c-.0085-.2476.04-.49387.14195-.72084.10194-.22696.25475-.42883.44721-.59079.45708-.34704 1.02741-.5217 1.60615-.49187.23468-.00102.46912.01497.70137.04782.24549.03416.49097.08198.75048.13663V8.2153c.03746-.36552-.07329-.73083-.30861-1.0179-.30324-.22803-.68514-.33327-1.06609-.29376-.23624.00109-.47158.02859-.70138.08198-.23919.05528-.47367.12837-.70137.21861l-.23146.08198h-.09819c-.09819 0-.14027-.06832-.14027-.19812v-.31425c-.00622-.07522.00831-.15069.04208-.21861.05218-.0584.1168-.10503.18937-.13663.2626-.12306.53761-.21922.82061-.28693.33218-.08331.67398-.12464 1.01699-.12297.61832-.0525 1.23302.134 1.71136.5192.19644.21006.34589.45761.43886.72693.09297.26931.12744.55452.1012.83751L7.70858 10.176Zm-2.6512.9701c.23887.0003.47605-.039.70138-.1162.23999-.0798.45329-.2214.61721-.4099.10821-.114.18537-.2525.22444-.403.04532-.1811.06654-.36707.06312-.5534v-.28693c-.20607-.04171-.41451-.07136-.62422-.08881H5.4221c-.34289-.02679-.68477.06249-.9679.25277-.10942.08972-.19564.20325-.25168.33142-.05605.12815-.08036.26735-.07095.40635-.01155.1238.00371.2486.04479.3663.04108.1177.10706.2256.19367.3169.19501.1477.4422.214.68735.1845Zm5.25332.6831c-.0889.0081-.178-.0136-.2525-.0615-.07121-.069-.12-.1569-.14028-.2527l-1.529-4.91878c-.03108-.08355-.04997-.17094-.05611-.2596 0-.10247.04909-.15713.1543-.15713h.64527c.08889-.00805.17795.01364.25249.06149.06832.07011.11457.15783.13326.25277L10.6193 10.743l1.031-4.24242c.0108-.09596.0554-.1853.1263-.25277.0771-.04787.1684-.06949.2595-.06149h.526c.0933-.008.1868.01357.2665.06149.0658.07094.1096.15858.1263.25277l1.017 4.24242 1.1292-4.26292c.0187-.09493.0649-.18265.1332-.25277.0746-.04785.1636-.06953.2525-.06148h.6102c.0218-.00213.0437.00047.0643.00761.0205.00714.0392.01865.0547.03369.0154.01503.0272.03323.0345.05326.0074.02004.01.04141.0079.06257.0026.03411.0026.06836 0 .10247 0 0 0 .08881-.0421.15713l-1.5851 4.91874c-.0187.0949-.065.1826-.1333.2528-.0754.0459-.1638.0675-.2525.0614h-.5611c-.0922.0096-.1848-.0148-.2595-.0683-.0695-.0684-.1139-.1572-.1263-.2527l-1.0169-4.09899-1.01 4.09899c-.0124.0955-.0568.1843-.1263.2527-.0753.0524-.1674.0766-.2595.0683l-.5751.0137Zm8.4165.164c-.3399.0015-.6788-.0351-1.01-.1093-.2607-.051-.5131-.136-.7505-.2528-.0839-.039-.1545-.1006-.2034-.1776-.0272-.0579-.0415-.1208-.042-.1845v-.3211c0-.1298.0491-.1981.1473-.1981.0418-.0065.0844-.0065.1262 0l.1613.0683c.2248.0979.46.1712.7014.2186.2558.0543.5168.0818.7785.082.3323.0202.6634-.0534.9539-.2118.1055-.0624.1921-.1509.2512-.2565.0592-.1055.0886-.2244.0855-.3446.0033-.0818-.0106-.1633-.0407-.2397-.0302-.07633-.076-.14588-.1347-.20439-.1899-.16027-.4157-.27492-.6593-.33474l-.9468-.29376c-.4097-.1003-.7758-.32526-1.0451-.64217-.2118-.26596-.3277-.59251-.3296-.92909-.0039-.23873.0566-.47428.1753-.68316.1173-.2053.2774-.38447.4699-.52603.2109-.15082.4487-.26203.7014-.32792.2689-.07547.5478-.11229.8276-.1093.1448-.00996.2901-.00996.4349 0l.4278.06831.3717.10247.2736.10931c.0734.04221.1396.09522.1964.15713.0391.06392.0585.13741.0561.21178v.30058c0 .13664-.0491.20495-.1473.20495-.0891-.00994-.1751-.03786-.2525-.08198-.3981-.16851-.8285-.25236-1.2625-.24593-.3007-.01421-.6002.04695-.8697.17762-.1001.05934-.1817.14411-.236.24521-.0544.1011-.0795.21471-.0726.32864-.0003.08419.0169.16757.0507.24507.0337.07751.0833.14753.1457.20581.207.16139.4457.27994.7014.34842l.9258.28692c.3924.10142.7444.31568 1.01.61484.201.25675.3073.57207.3016.89491.0041.2554-.0535.5082-.1684.7378-.1126.22-.2758.4117-.4769.5602-.2081.163-.4461.2859-.7014.3621-.3061.0959-.6253.1465-.9468.1503l.021-.0068ZM1.95721 14.0043c.08851-.1117.25276-.1417.40291-.0501 2.956 1.6699 6.30435 2.5466 9.71118 2.5424 2.547-.0102 5.0667-.5176 7.4139-1.4927.2212-.0923.442-.0252.5504.1273.0544.0765.0784.1732.056.2731-.0223.0994-.088.1913-.1929.2664l-.0025.0018c-2.374 1.591-5.18 2.437-8.0499 2.4273-3.62804.0192-7.13297-1.2975-9.82873-3.6929.00006 0-.00007-.0001 0 0-.06599-.0585-.10575-.1289-.1154-.2033-.00962-.0742.01189-.1449.05504-.1993Z"
      />
      <path
        fill="currentColor"
        d="M21.9852 13.2357c-.0506-.0587-.1329-.1058-.2258-.1441-.0959-.0396-.2151-.0746-.3508-.1035-.2719-.0579-.6185-.093-.9967-.0876-.7541.0108-1.6508.183-2.3341.6748-.1118.0805-.1949.1945-.1751.3147.0225.1362.1551.1917.2864.1917l.0241-.003c.375-.0465.9652-.1198 1.5-.134.2706-.0072.5225.0009.7232.0339.1003.0164.1845.0386.2506.0663.0667.028.1084.0591.1318.0896l.001.0013c.0211.0266.0396.072.0489.1434.0092.0704.0085.1579-.0018.2604-.0204.2049-.0773.456-.1527.723-.1173.4156-.2758.8577-.4014 1.2081-.0355.0991-.0684.1909-.097.2727-.0253.0645-.0344.13-.0204.1901.0147.063.0538.1145.1113.143.1108.0549.2469.0095.3548-.0833.6431-.5509 1.0488-1.3947 1.2591-2.1349.1055-.3712.1632-.7208.1764-1.0006.0065-.1398.0021-.2647-.0141-.3675-.0155-.099-.0442-.1922-.0977-.2545Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAwsIcon {
  readonly class = input<string>('');
}
