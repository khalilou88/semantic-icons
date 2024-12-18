import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jaeger-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Jaeger</title>
      <path
        d="M14.816 22.3774c0 .0724-.1283.1311-.2865.1311-.1581 0-.2864-.0587-.2864-.131 0-.0725.1283-.1311.2864-.1311.1582 0 .2865.0586.2865.131Zm-.738.1554c0 .075-.126.136-.2815.136-.1555 0-.2816-.061-.2816-.136 0-.075.126-.136.2816-.136.1555 0 .2816.061.2816.136Zm-.7427.1408c0 .0697-.1739.1262-.3884.1262-.2145 0-.3884-.0565-.3884-.1262 0-.0697.174-.1263.3884-.1263.2145 0 .3884.0566.3884.1263Zm-1.136.1116c0 .0885-.1587.1602-.3544.1602-.1957 0-.3544-.0717-.3544-.1602 0-.0885.1587-.1602.3544-.1602.1957 0 .3544.0717.3544.1602Zm-1.1943.0389c0 .0965-.2369.1747-.5291.1747-.2923 0-.5292-.0782-.5292-.1747 0-.0966.237-.1748.5292-.1748s.5291.0782.5291.1748Zm1.107-.8787c.6116-.0292.7718-.1214.7912-.3253 0 0 .1214-.1505-.2913-.233-.4126-.0826-.9952-.0826-.8932-.4127.102-.335 1.1554-.3932 1.7865-.3932s1.3447-.0388 1.2525.301c-.0874.3398-.5486.3447-.5097.5728.0388.2282.4175.1602.3495.5195-.068.3592-1.7428.4903-2.9274.5923-1.1797.102-1.9321-.0195-1.7428-.3399.1893-.3204 1.573-.2524 2.1846-.2815Zm-9.9693 1.0755c.0066.045-.128.102-.3004.127-.1724.0251-.3176.0089-.3241-.0362-.0066-.0452.128-.102.3004-.1271.1725-.025.3176-.0088.3241.0363Zm.0918.226c.0077.053-.1474.1195-.3464.1484-.199.029-.3665.0094-.3742-.0437-.0078-.053.1473-.1195.3463-.1485.199-.0289.3666-.0093.3743.0438Zm.1648.204c.0077.053-.1473.1194-.3463.1484-.199.0289-.3666.0093-.3743-.0437-.0077-.0531.1473-.1196.3463-.1485.199-.029.3666-.0094.3743.0437Zm.7387.114c.0086.0638-.1501.138-.3547.166-.2046.0278-.3774-.0013-.3861-.065-.0087-.0638.15-.138.3546-.166.2046-.0278.3775.0013.3862.065Zm1.1803.1309c.0066.0828-.2394.17-.5494.1947s-.5667-.0225-.5733-.1053c-.0066-.0829.2394-.17.5494-.1947s.5667.0224.5733.1053Zm1.1926.0011c.0182.0838-.2006.2026-.4888.2653-.2882.0627-.5366.0456-.5548-.0382-.0182-.0839.2006-.2027.4888-.2654.2882-.0627.5366-.0455.5548.0383Zm1.2463-2.0331c.3544-.0777 1.9856-.0388 2.0292.2476.0534.2913-2.67.5437-3.2866.631-.6165.0875-.6408.2622-.6408.2622 0 .0146-.0534.1554.3495.1505.5632-.0097.9564.1068.7234.3787-.233.2719-2.8109.199-3.34 0-.5292-.199-.3204-.398-.0486-.5.2719-.0971 1.0438-.1894 1.937-.3593.8933-.1699 1.9274-.7282 2.2769-.8107Zm6.7917-9.7337a.6457.6457 0 1 1-1.2914 0 .6457.6457 0 0 1 1.2914 0ZM7.3155 13.44a.6457.6457 0 1 1-1.2914 0 .6457.6457 0 0 1 1.2914 0ZM4.325 20.023c-.3544 0-.602-.1409-.7573-.4176-.0631-.1068-.102-.2379-.1311-.3738-.0631-.335-.0437-.7282.0291-1.0972.0825-.4126.2282-.7961.3835-1.0389.1408-.2233.2719-.369.3884-.466a50.61 50.61 0 0 0 .5195 1.3205c.2378.5874.4563 1.1068.6165 1.4758-.0097.0194-.0243.034-.0388.0534-.233.3107-.5583.5437-1.0098.5437Zm15.0155-2.1944c0 .0146.0049.0388.0195.0728.0534.2913.233 1.0778.3543 1.5292-1.8642.2088-4.5051.3399-7.4325.3399-2.4759 0-4.7479-.0923-6.515-.2476a86.46 86.46 0 0 1-.6748-1.607c-.597-1.4563-1.3302-3.3933-1.5583-4.5779-.2088-1.0923-.4612-2.4176.1165-3.6119A28.5682 28.5682 0 0 1 3.32 9.697c-1.369-.1456-1.5535-.4127-1.6263-.5243-.0777-.1117-.0923-.2427-.0389-.3738.1214-.3059.534-.5826 1.0146-.8108a5.028 5.028 0 0 0 .136.2816c-.437.2088-.7768.432-.8593.6457-.0194.0437-.0097.0631.0049.0874.068.097.4611.398 2.6846.4709a.6316.6316 0 0 1-.5-.505.634.634 0 0 1 .0582-.3931c-.2039.1068-.4078.233-.602.364 0 0-1.6554-2.1748-.4709-2.8933.136-.0826.267-.1214.3981-.1214.9904 0 1.7234 2.1603 1.7234 2.1603s-.1456.0534-.3592.1505c.2621.0243.7816.1457 1.8302.568 1.068.4321 1.4952.4612 1.6118.4612A.625.625 0 0 1 9 9.3426l.034.034a22.885 22.885 0 0 0 .4563-.0389c.0485-.0048.1116-.0194.1942-.0388a.6277.6277 0 0 1 .2864-.5826.6193.6193 0 0 1 .733.0437.434.434 0 0 0 .0874-.034c.2719-.1359 1.2331-1.1602 1.9565-2.034a.616.616 0 0 1 .6117-.2137c.1941-.6553.9709-2.9759 2.1554-2.9759 1.3788 0 .5777 2.7283.4418 2.9225 0 0-.3204-.0242-.7573-.0242-.4855 0-1.1166.029-1.6312.165.0146.0097.034.0243.0534.0389.267.2184.301.6117.0825.8787-.1165.1359-.267.3204-.4417.5194.3592-.1456.733-.3058 1.1068-.466.6263-.2768 1.2089-.539 1.7234-.7914h.0098l.0048-.0097c.4418-.2136.8399-.4175 1.1748-.6068 1.17-.6554 1.3157-.9418 1.3302-1.0146.0097-.0486 0-.0631-.0048-.068-.0097-.0194-.0923-.097-.4612-.097-.403 0-.9661.0922-1.5535.2184a3.849 3.849 0 0 0 .0291-.3253c.5729-.1165 1.1214-.2039 1.5292-.2039.369 0 .5923.068.7088.2136.0534.0631.1068.1748.068.335-.0437.1893-.2428.5194-1.4807 1.2137a8.6623 8.6623 0 0 1-.3738.2039c-.0922.0534-.1942.102-.2961.1553.5582.471.9758 1.1748 1.2379 2.1943.5292 2.039.937 4.4275 1.2185 6.3208-.4612.0583-.7427.2767-.801.6311-.0631.3836.136.5923.3447.8156.2233.2379.4806.505.5631 1.1069Zm-4.84-12.331c0 .0244.0048.0195.0048.0195s.0242-.0437.063-.1165c.0438-.0728.102-.1748.17-.2961.0728-.1214.1553-.2573.2573-.3787.0485-.0583.1068-.1165.165-.1602.0632-.0437.1214-.0728.1845-.0825.0194 0 .034-.0049.0486-.0049.0145.0049.034 0 .0485.0049.0146.0048.034.0048.0486.0097l.0388.0097.0097.0048c0 .0049.0049.0049.0049.0097.0097.0146.0145.0437.0194.0777 0 .068-.0049.1505-.0194.2233-.0097.0729-.0292.1457-.0437.2136-.034.136-.0631.2476-.0826.3302-.0242.0825-.034.131-.034.131s.034-.034.0874-.102c.0534-.063.1214-.165.1942-.2912.034-.0631.0729-.136.102-.2185.0291-.0825.0582-.1747.068-.2815.0048-.0534.0048-.1165-.0195-.1845-.0048-.0194-.0145-.034-.0242-.0534l-.0146-.0243-.0194-.0243c-.0194-.029-.0971-.0776-.102-.0776l-.0097-.0049h-.0048l-.0146-.0048h-.0049l-.0194-.0097-.0437-.0146c-.0242-.0097-.0582-.0146-.0874-.0194-.029-.0049-.063-.0049-.0922-.0049-.0291.0049-.0631.0049-.0922.0097a.6844.6844 0 0 0-.3204.1554c-.0874.0728-.1505.1553-.204.2379-.1019.165-.1601.33-.199.4709-.034.1456-.0534.267-.0582.3495-.0049.0388-.0049.0728-.0049.097Zm-4.2868 3.578c-.0874.0534-.1116.165-.063.2524.0145.0195.0922.1311.2572.1942a.707.707 0 0 0 .2525.0437c.1456 0 .3058-.0388.4709-.1116.3592-.1602 1.2379-1.0487 2.2428-2.2575.0631-.0776.0534-.1942-.0242-.2573-.0437-.034-.0874-.0437-.1166-.0437a.1794.1794 0 0 0-.1407.068c-.4321.5195-1.6555 1.9225-2.0924 2.1458l-.0194.0097c-.0534.0194-.102.0388-.1505.0534l-.2233.0631-.1797-.1456c-.0291-.0292-.0728-.0437-.1165-.0437a.175.175 0 0 0-.097.029ZM9.17 14.304c.0582.335.5874.5243 1.1845.4272.5971-.097 1.039-.4515.9807-.7865-.0583-.335-.5875-.5243-1.1846-.4272-.5971.102-1.034.4564-.9806.7865ZM4.4172 7.9493a2.001 2.001 0 0 0 .0729.0922s-.0049-.0145-.0049-.034c-.0049-.0194-.0049-.0485-.0146-.0873-.0097-.0777-.0388-.1845-.0776-.3107a2.4088 2.4088 0 0 0-.1748-.4175 1.8868 1.8868 0 0 0-.1408-.2233c-.0534-.0729-.1165-.1457-.2039-.2136-.0485-.0292-.097-.0632-.165-.0826-.0146-.0048-.034-.0048-.0535-.0097h-.0728c-.0097 0-.0291.0049-.034.0049l-.029.0097-.0195.0048-.0049.0049-.0097.0048a.3371.3371 0 0 0-.1602.136.4473.4473 0 0 0-.0534.1747c-.0097.1068.0146.1942.034.272.0243.0776.0534.1504.0825.2087a1.493 1.493 0 0 0 .17.2718c.0242.0291.0436.0534.0582.068l.0243.0243s-.0097-.0437-.0243-.1166c-.0146-.0728-.0388-.1796-.0582-.301a2.2904 2.2904 0 0 1-.0243-.1941c-.0049-.068-.0049-.136.0097-.1894.0048-.0242.0146-.0437.0243-.0534.0097-.0048.0145-.0097.029-.0145h.0098l.0146-.0049c.0048 0 0 .0049 0 .0049h.0048a.2045.2045 0 0 1 .0631.034c.0486.0388.102.0922.1505.1504.0534.0632.102.1214.1457.1845.0873.1262.1747.2476.2476.3496a5.199 5.199 0 0 0 .1844.2524Zm.3544 1.0777.034.0049c.131.0146.5534.0922 1.5923.5097.8545.3447 1.5001.5195 1.9128.5195.3107 0 .3932-.0971.4223-.131.0437-.0535.0486-.1069.0437-.136-.0048-.0291-.0145-.0825-.068-.1262-.0436-.034-.0873-.0437-.1164-.0437-.0292 0-.0583.0048-.0826.0194l-.0874.0437h-.1165c-.2476 0-.7622-.0825-1.767-.4903-1.204-.4855-1.6458-.539-1.7769-.539-.0291 0-.0388 0-.0582.005-.0632.0145-.102.0533-.1166.0776-.0145.0194-.0388.0728-.029.136.0145.0873.0922.1504.1795.1504h.034Zm.0437 3.6945c0 1.1262.9127 2.0438 2.039 2.039 1.1263 0 2.039-.9128 2.039-2.039 0-1.1263-.9127-2.039-2.039-2.039s-2.039.9127-2.039 2.039Zm5.5246 3.3643c-.267.102-.5.2475-.7039.3738.0486.2184.199.7088.6311.5825.3544-.1068.1505-.733.0728-.9563Zm.6214.7816c.1166.0437.5778.0825.534-.4758-.0145-.1942-.029-.3301-.0388-.4224-.0437-.0048-.0825-.0048-.1213-.0048-.136 0-.2622-.0049-.369-.0049-.1117 0-.17.0049-.1942.0097a9.3046 9.3046 0 0 0-.1553.0292c.0388.2524.1456.7961.3446.869Zm1.7866-1.3788c.432-.1942.432-.5243.4078-.6942-.0292-.1796-.2962-.5583-1.3788-.568 0 0-.335.7816-1.2428.9273-.9078.1505-1.2962-.0243-1.4515-.2185 0 0-.8739.2573-.9467.8107-.0728.5535.6603.7477 1.0098.5535.3495-.1942.8738-.6166 1.573-.7088.3737-.0486 1.5971.0922 2.0292-.102Zm2.471-4.2333c0-1.1262-.9127-2.039-2.039-2.039s-2.039.9128-2.039 2.039c0 1.1263.9127 2.039 2.039 2.039s2.039-.9175 2.039-2.039ZM3.1162 18.1975c-.0437.267-.0728.6117-.0243.9564-.6602-.1408-1.034-.3058-1.034-.4757 0-.17.3835-.335 1.0583-.4807Zm18.4866.0389c.5729.136.8884.2864.8836.4418 0 .2476-.767.4757-2.0633.6553.233-.063.4952-.233.7962-.5146.1505-.1407.267-.3107.3495-.5a.5922.5922 0 0 0 .034-.0825Zm-.3495-.0728a1.0453 1.0453 0 0 1-.2767.3883c-.3884.369-.6214.4467-.7525.4467-.2573 0-.4466-.3593-.5583-1.0632-.0049-.0486-.0146-.0971-.0194-.1456-.0923-.6991-.4127-1.039-.6457-1.2817-.2039-.2136-.301-.3301-.2621-.5486.0534-.3155.4369-.3835.7476-.3835.1456 0 .2573.0146.2573.0146h.0194c.5728.0097 1.17.5291 1.4515 1.2525.1554.398.2185.903.0389 1.3205ZM4.7085 6.3618c-.1068-.1456-.2136-.267-.3253-.3592-.0097-.3981-.0097-.7574.0098-.8981.0388-.2622.6893-1.0244 1.2962-1.607.5097-.4903 1.4855-1.335 2.301-1.5.1263-.0243.272-.0389.4419-.0389 1.5535 0 4.6993 1.1651 4.8546 1.3205l.0097.0097c.0389-.3787.0777-.9078.0098-1.0583 0 0 .296.0922.3495.2767 0 0 .733-.738.6602-1.6554 0 0 .165 0 .1845.296 0 0 .5292-1.2524.9175-1.1408.3884.1117-.1262 1.8594-.4029 2.1895 0 0 .4418-.1068.4952-.403 0 0 .0534.2574-.0194.403 0 0 .9952-.8107.9563-1.1214 0 0 .1311.3155.0923.5534 0 0 .8253-.6602.8253-.937 0 0 .1262 1.6021-1.471 2.1895 0 0 .4224-.0534.6263-.0922 0 0-.1748.2281-.4418.5534-.1602-.102-.3496-.1505-.5632-.1505-.6408 0-1.2282.4855-1.7476 1.4419.0776-.4175-.0292-.7574-.1845-.7914-.0049-.0048-.0146-.0048-.0243-.0048-.1602 0-.3884.2767-.4806.6894-.0923.4369.0146.8058.1748.8398.0582.0146.131-.0194.2039-.0874-.1505.3593-.267.6942-.3447.9321-3.976 1.7914-6.5053 1.7527-7.656 1.573-.0825-.2137-.233-.5778-.4417-.9419-.0583-.097-.1166-.1941-.1748-.2815 2.7769.7476 6.4761-.6506 7.9568-1.2962-.0777-.2185-.0874-.5-.0194-.806.0631-.296.1942-.5485.3544-.7184-.0291-.1165-.0534-.199-.0728-.2427-.3399-.1845-3.1556-1.2331-4.6265-1.2331-.1457 0-.272.0145-.3787.034-1.301.267-3.277 2.5292-3.3497 2.8497-.0243.1553-.0146.6796.0048 1.2136Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgJaegerIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
