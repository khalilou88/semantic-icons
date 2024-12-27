import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Gin</title>
      <path
        d="M11.836 23.977c-2.0587-.1046-3.3698-.3594-4.468-.8684-.131-.0606-.1153-.0272-.278-.596-.2755-.9627-.5534-2.128-.7848-3.29-.135-.678-.1535-.7614-.4716-2.1176-.5104-2.1762-.6402-2.831-.804-4.0557-.1064-.7962.1223-1.3156.2754-.6255.6026 2.7148 1.124 4.6969 1.6753 6.3684.1901.5764.1752.5525.3347.537.1095-.0105.1097-.0096.0278.1811-.1118.2604-.0573.3991.2913.7409.2612.256.2638.2712.0407.2387-.174-.0254-.1655-.0434-.1023.2138.0295.1199.0809.3448.1141.4997.2644 1.2314.6094 1.8336 1.1121 1.941 1.4684.3139 3.6012.4502 5.4794.3503 2.1817-.116 2.7037-.1989 3.3812-.5368.4582-.2286.8528-.6569.611-.6632-.1781-.0047-.1948-.0464-.0437-.109.329-.1365.468-.2818.4411-.4612-.008-.0535.0021-.1094.0422-.2318.1232-.3762.1439-.6822.1123-1.664-.0146-.4543-.0136-.487.021-.6574.0912-.449.132-.7886.199-1.6564.0474-.6126.0627-.766.1118-1.1186.0491-.3532.0648-.5537.0929-1.1868.0549-1.2385.116-1.7317.2287-1.8443.1884-.1885.1874-.289-.006-.5633-.2205-.3129-.2198-.4765.003-.711.1085-.1142.1132-.242.0391-1.0652-.019-.2114-.0394-.5284-.0452-.7045-.0073-.217-.0169-.3202-.0297-.3202-.041 0-.306.2264-.8894.76-.6635.6068-.8368.75-1.2089.9984-.7674.5123-1.5042.7633-2.7787.9462-1.2864.1847-2.8008.1411-3.7922-.1092-.6681-.1686-1.055-.3507-1.8085-.8512-.7058-.4688-.6674-1.2277.079-1.5624.3362-.1507.076-.3149-.5986-.3778-.5074-.0474-.2495-.1461.3996-.153.7887-.0083 1.349-.2884 2.0736-1.0363.3034-.3131.374-.3746.7782-.677.6428-.4808.8696-.6895.972-.8947.0776-.155.0733-.3082-.0094-.3397-.0271-.0103-.0404-.029-.0404-.0566 0-.0517.1571-.0442-2.5615-.122-2.8682-.0822-5.0395-.2118-6.1476-.367-.2164-.0304-.1133.1615.1509.2806.0836.0377.0914.0714.0198.0852-.1952.0377-.1844.01-.1284.3283.2173 1.235.5548 1.5418 1.2152 1.1047.1309-.0866.1765-.1027.4961-.1753.7-.1589 1.4556-.2464 2.5838-.2993 1.1633-.0545 1.2892-.0588 1.3032-.0448.0305.0304-.5599.1101-1.5935.215-1.07.1086-1.4287.1577-1.926.2638-.1342.0286-.2802.0521-.3245.0522-.2895.0008-.7114.2931-.8644.5988-.1926.3851-.0152.6153.5107.6627.1761.0159.6063.0923.6826.1213.0658.025.0525.0663-.0337.1044-.0932.0413-.093.039-.0085.0922.1688.1066.0969.0998-.37-.0351-.7785-.225-.9368-.2379-.723-.0588.1015.085.0972.1096-.0132.076-.1712-.0519-.1676-.0865-.0636.6052.1332.8858.031.8419-.1545-.0665-.2554-1.25-.6686-2.3144-.484-1.2466.04.2318.0853.4146.2197.888.1811.638.2872 1.2493.2237 1.2885-.0297.0184-.1904-.4844-.3028-.947-.124-.5102-.1767-.8005-.4328-2.3821-.1298-.802-.2425-1.3464-.378-1.8265-.0773-.2736-.0497-.403.128-.6008.3644-.4052 1.2746-.6528 1.2746-.3466 0 .147-.187.2458-.6436.3402-.5204.1076-.5632.1751-.2897.4578.2486.2569 1.8142.4808 3.7254.5327.3663.01.9119.0259 1.2124.0354 2.1339.0674 4.3877.0663 4.5184-.0022.015-.0079.0837-.105.1527-.2158.2825-.454.552-.795.9445-1.1954.2782-.2838.2865-.2942.2417-.3055-.132-.033-.1427-.5621-.0127-.6282.2383-.121.3542-.2918.7283-1.0725.198-.4133.3093-.5955.4777-.7825.1457-.1618.2569-.385.421-.8452.1614-.4524.2639-.6635.3799-.7823.223-.2285.2324-.103.0363.4903-.162.49-.7111 1.686-1.1268 2.4542-.355.656-.307.8451.1881.7427.0883-.0182.1706-.024.2462-.017.1306.0119.2723-.0174.6213-.1284.2892-.092.3264-.0769.201.0818-.0891.1128-.0887.1142.053.1799.1405.065.1301.0783-.0611.0783-.265 0-.4498.1059-.4766.2732-.0118.074-.0118.074-.1226-.0473-.3058-.335-.6452-.2808-.851.136-.072.1458-.1856.2528-.2684.2528-.0513 0-.0393-.0339.082-.232.293-.4784.2985-.5618.028-.4245-.308.1563-.7837.8261-.803 1.1308-.017.2655.2956.4083.5327.2434.9017-.627 1.348-.8748.9794-.5438-.0765.0687-.159.148-.1832.1762-.1744.2028-.3106.2933-.5656.3757-.8493.2745-.8493.6558 0 .6355.2265-.0055.4225-.0022.4774.0079.412.0756 2.2334-.2378 3.1616-.544.5878-.1938.6844-.4293.3229-.7867-.4647-.4592-.959-.3684-.6466.1189.1936.302-.3882.6232-1.3705.7565-.4425.06-.6113.0898-.7738.1363-.1108.0318-.4379.0719-.704.0863-.3523.019-.4642-.0274-.1925-.08.4158-.0804.5822-.105 1.0783-.1598 1.3303-.1468 1.7592-.3548 1.7627-.8548.0019-.2777-.2227-.3198-.8506-.1598-.201.0513-.2093.0324-.0248-.0564.2821-.1358.2599-.2519-.0717-.374-.1107-.0408-.1107-.0408.0516-.0538.7422-.0595 1.1048-.3546.7593-.6182-.0677-.0516-.0657-.0685.01-.0837.029-.0058.086-.0344.1266-.0635.1634-.1174.2997.246.1556.4144-.198.2313-.0359.5312.357.6602.403.1323.5887-.0506.4222-.4158-.03-.0657-.089-.2578-.131-.4269-.2398-.9631-.7595-2.0407-.9843-2.0407-.0216 0-.036-.0196-.0475-.064-.2147-.8343-.2878-.9893-.5348-1.1333-.4195-.2445-.551-.6687-.1636-.5275.8873.3236 1.8223 1.4494 2.5325 3.0495.5654 1.274.6932 3.168.3239 4.8039-.203.8994-.363 2.6656-.5462 6.0301-.0749 1.3745-.1492 2.3884-.2385 3.2532-.0223.216-.0453.4696-.051.5635-.0438.708-.2035 2.0275-.3607 2.98-.033.1995-.0473.3696-.0585.6915-.0422 1.2204-.4315 1.8227-1.2581 1.9468a2.7189 2.7189 0 0 0-.325.075c-1.0801.3317-2.166.471-4.3425.557-.728.0288-.7087.0288-1.3064-.0016zm.2615-.2356c.0474-.0474-.2411-.0896-.8847-.1297-.1644-.0102-.3527-.026-.4184-.0352-.4177-.058-1.1698-.1029-1.1698-.0699 0 .1276 2.3564.3514 2.473.2348zm-4.0952-.8634c0-.0406-.3364-1.3698-.4044-1.5977-.1252-.42-.3766-1.0159-.4231-1.003-.0697.0192.0988.9043.2754 1.447.1744.5358.5521 1.3252.5521 1.1537zm-.5246-.1305c.0433-.2745-.0418-.6732-.3351-1.5704-.176-.5382-.2341-.7414-.276-.9641-.0441-.2356-.0402-.2248-.0799-.2188-.1655.0246-.151.285.054.9752.1484.4996.1654.5673.1879.7506.064.5203.4057 1.3021.449 1.0275zm-.7904-3.2816c-.0001-.3436-.0485-.6234-.2044-1.1826-.1744-.6253-.2435-.896-.2825-1.1058-.0745-.4017-.2292-.621-.1807-.2564.026.1948.215 1.1792.2665 1.3878.0233.094.0618.3268.0857.5174.0662.5282.1018.6734.197.8049.0977.1347.1185.1055.1184-.1653zm5.7823-8.2201c.047-.0521.0384-.1659-.0348-.4592-.1-.3999-.0996-.5862.0013-.7401.1707-.2607-.8164-.3768-1.398-.1645-.53.1934-.648.5174-.3192.877.1613.1766-.0747.272-.2973.1203-.3041-.2074-.2766-.8612.0363-.8612.0362 0 .106-.073.106-.111 0-.0561-.0674-.1035-.211-.148-.1984-.0617-.1974-.0741.0085-.108.4832-.0793.939-.4219 1.6589-1.2467.935-1.0714 1.3075-1.3927.8116-.7002-.2504.3497-.4599.592-.8783 1.016-.7501.7603-.8434.9222-.5313.9222.472 0 .6826-.1937 1.1142-1.0246.4076-.7848.6084-.9866.8963-.901.1217.0362.121.0386-.2186.8754-.314.7736-.2997.986.0543.8106.1767-.0875.17-.0762.2403-.4093.173-.8206.5299-1.9468.617-1.9468.1153 0 .0463.5054-.1424 1.0417-.2842.8081-.298 1.0686-.0684 1.2959.2501.2476.5305.202.7474-.1216.0793-.1184.1145-.1023.1763.0809.046.1363.0536.1408.244.1434.2617.0037.6195-.091.6392-.169.0064-.0254.0206-.0402.035-.0364.1408.0369.1388-.1065-.0025-.1673-.0918-.0395-.0998-.0645-.032-.0992.1499-.0764.3061.038.3061.2243 0 .0784.0186.0885.205.11 1.2175.1412 1.9496-.176 2.364-1.024.0706-.1445.205-.4086.299-.587.3348-.6367.4726-1.1026.4121-1.3938-.0352-.1699-.0169-.164-.3792-.12-1.8582.2256-3.5292.3794-4.933.454-.2677.0141-.5553.0298-.639.0348-.1525.009-.1525.009-.4526.3035-.4846.4754-.9042.8606-1.7005 1.5606-.2254.1982-.4329.3853-.461.4158-.0804.0868-.3442.2954-.7344.5806-.815.5957-1.2381 1.0543-1.0973 1.189.1613.1545 1.371.3751 2.378.4339.1692.0099.4035.029.521.0426.3097.036.319.0367.4797.0397.1296.0024.1506-.0015.1793-.0333zm4.9335-2.6883c-.6352-.103-1.2474-.4616-1.8828-1.103-.419-.4228-.3704-.4557.2256-.1524.4367.2222.5944.2777.7778.2734.0704-.0017.1626-.0037.2049-.0045.1903-.0038.9252.4017.8551.4718-.024.024-.159-.0192-.4196-.1342-.8347-.3685-1.3685-.3711-.8026-.0041.5953.3862 1.2494.571 1.64.4632.146-.0402.186-.0393.1923.0044.0242.1694-.3493.257-.7907.1854zm-3.5168 2.6903c.0746-.0187.3623-.0728.6394-.1204 1.31-.2247 1.6092-.3389 2.4225-.9243.552-.3972.6191-.7887.1254-.731-.5517.0644-.6125.1133-.7745.6229-.1885.5932-.272.665-.7748.6656-.5271.0006-.7398-.181-.889-.7596-.0528-.2045-.067-.2222-.2166-.2715-.5559-.1833-.8321.1858-.8322 1.112 0 .1586-.0097.1672-.1927.1722-.2981.0081-.3303-.091-.1542-.4747.2334-.509.2423-.6089.0614-.6855-.392-.1659-.7831.2546-.7091.7622.0663.4551.3933.6953.8023.5892.116-.0301.116-.0301.2182.0226.123.0634.1069.0622.274.0203zm1.822-.7768c.2327-.0208.3877-.1848.3877-.4102 0-.3258-.2825-.4682-.6292-.317-.1015.0442-.1223.0476-.2064.034-.3571-.0575-.5023.2388-.2548.52.1594.1812.2799.2108.7026.1732zm-3.2106-.9502c.373-.1904.8327-1.1638.6843-1.4494-.0437-.0844-.0598-.0769-.158.0736-.048.0734-.1677.2402-.266.3708-.458.6076-.5777.8672-.4559.989.0617.0617.0998.0648.1956.016zM10.302 21.2613c-.1018-.013-.4553-.0772-.7855-.1426-.6434-.1273-.9326-.1714-1.1234-.1714-.1763 0-.2162-.0341-.1669-.1425.0536-.1175.2172-.105.7572.0579.3561.1074.6022.167.7437.1803.061.0057.1494.021.1964.0338.1346.037 1.2056.1779 1.3516.1779.0044 0 .0033.0077-.0025.017-.0158.0257-.751.0177-.9706-.0104zm1.7587-.7484c-.2231-.1093-.2921-.2537-.3514-.7354-.0621-.5045-.1591-.66-.4529-.7263a4.0909 4.0909 0 0 1-.1152-.0274c-.0404-.011-.0716-.173-.0565-.2939.034-.2724.2048-.4916.7172-.9203.1127-.0943.2348-.2026.2713-.2405.3605-.3747 1.5306.1053 1.9894.816.3258.5047.322.6185-.028.8492-.4315.2844-.4933.3657-.4846.6372.003.0892.0065.2044.008.2561.0095.3235-.1771.4074-.6452.29-.3964-.0994-.5232-.0838-.6829.0842-.0597.0628-.0632.063-.1692.0111zm1.1381-.2254c.31-.1586.3749-.5512.1474-.892-.244-.3652-.5598-.2393-.5485.2187.0139.5637.1544.7995.4011.6733zm-.8657-.0823c.245-.1105.326-.537.1665-.8751-.1556-.3297-.4463-.1355-.5016.335a3.7214 3.7214 0 0 1-.033.2215c-.0671.345.062.4567.3681.3186zm-.5397-1.1367c.2714-.1816.542-.19 1.3747-.043.4775.0845.8627.0285.8621-.1253-.0023-.5725-.3483-.7422-1.2293-.603-.5545.0876-.7589.0879-1.0083.0016-.2747-.095-.6015.1652-.5532.4404.045.2565.3721.451.554.3293zm-2.0236-.8882c-1.242-.2611-2.0297-1.7477-1.3788-2.6022.1995-.2618.2624-.1704.1232.1789-.5807 1.4577 1.2303 2.8224 2.6353 1.9858 1.027-.6115 1.0144-2.1067-.0221-2.619a3.1056 3.1056 0 0 1-.1964-.1114c-.4015-.247-.8534-.2309-1.7165.0612-.504.1705-.4886.1706-.3296-.0011.6047-.6532 1.8983-.6335 2.6865.041 1.4324 1.2255.1142 3.4695-1.8016 3.0668zm5.0377-.1125c-1.9591-.3-2.6203-2.1867-1.1535-3.2915 1.3107-.9873 3.3222-.0095 3.2577 1.5836-.0398.9811-1.1207 1.8585-2.1042 1.708zm.4013-.3203c1.5031-.02 2.0059-1.9306.735-2.7936-.7982-.5421-2.0927-.295-2.5552.4876-.542.9171.0474 2.1467 1.1115 2.3185.0282.0045.1473.0043.2647-.0006.1174-.005.3172-.0103.444-.012zm-1.504-.8356c-.4402-.1245-.5095-.6544-.1381-1.0566.3355-.3633.817-.2062 1.0182.3322.0892.2387.058.2748-.2225.2581-.1793-.0106-.2639.0025-.2635.041 0 .0067.0603.0566.134.1109.2197.162.2247.2153.0267.2836-.144.0497-.4316.0657-.5548.0308zm-4.6535.1072c-.4663-.0444-.6306-.2972-.4418-.6793.224-.453.732-.5855 1.0146-.2645.4276.4858.1102 1.0088-.5728.9438zM5.2609 4.894c-.0061-.01.0088-.0465.0331-.0811.0243-.0347.0641-.0913.0885-.1258.0243-.0345.0483-.0939.0534-.132.0058-.043.0197-.0722.037-.0775.0706-.0214.6893-.1486.9498-.1953.6694-.12.851-.132 2.3652-.156 2.81-.0445 3.8851-.08 4.9246-.1626.3576-.0284.3387-.0321.4233.0843.1331.1833.0163.311-.3377.3693-.4252.0699-2.1378.0258-2.5939-.0668-.4837-.0983-.636-.0931-.7755.0264-.0812.0694-.0633.0696-.2775-.0018-.27-.09-.507-.1186-.8766-.106-.3002.0103-.417.0236-1.1357.129-.1925.0283-.4615.0599-.5976.0701-.4723.0356-1.013.1356-1.7562.325-.4978.1267-.507.1285-.5242.1008Zm11.997-1.2081c0-.0854.1102-.209.595-.6678.2691-.2547.4638-.4815.4638-.5401 0-.0556.0477-.0598.0665-.006.1044.2996-.1068.597-.6983.9833a31.133 31.133 0 0 0-.3207.2115c-.0847.0578-.1062.0617-.1062.019z"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGinIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
