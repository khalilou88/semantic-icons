import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-apachehbase-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Apache HBase</title>
      <path
        d="M23.429 20.977c-.0185-.0485-.0335-.1343-.0335-.1905 0-.153-.1178-.3548-.292-.5004-.0853-.0713-.2084-.21-.2736-.3082-.1388-.209-.2892-.291-.8447-.46-.609-.1853-.7962-.3443-.8511-.7232l-.0274-.1889-.111.1608c-.217.3145-.3606.3648-.6549.2291-.1868-.0861-.323-.094-.478-.0276-.0989.0423-.1173.0405-.182-.018-.069-.0625-.076-.0627-.1739-.0048-.0772.0456-.1396.0546-.2566.037-.187-.028-.287.0266-.4121.2249-.237.3755-.4059.2037-.405-.4122.0009-.684.3229-1.0716 1.2512-1.5058.4777-.2235.694-.3683.8272-.5536.1025-.1429.1116-.1479.1562-.0868.095.13.4224.7998.5787 1.1843.1781.438.232.5193.2995.4517.057-.057-.081-.4606-.3487-1.0205-.6645-1.3894-1.6463-2.3832-2.8717-2.9068-.5624-.2402-.8388-.2913-1.569-.29-.555.001-.6912.013-1.0662.0927-.5484.1165-1.1617.3128-1.9435.6217-.7875.3113-.7882.3113-1.5823.027-.3217-.115-.7072-.2405-.8569-.2787-.3058-.078-.7573-.0916-1.0112-.0305-.2928.0704-.7047.2907-1.2106.6473-.607.4278-.9336.5974-1.3687.7104-.3767.0979-.536.1831-.6298.337-.0749.1228-.0822.2215-.0254.346.0388.0852.4104.3564.845.6168.1179.0706.223.1424.2337.1597.0254.0411-.5634.3347-.9934.4954-.7646.2857-1.5864.4664-2.8254.6214-.8255.1032-.9662.1322-1.5824.3256-.246.0772-.602.1724-.7911.2117-.8345.1731-1.5908-.0321-1.7054-.463-.021-.0786-.0583-.1662-.0831-.1946-.1527-.1752-.2093-.5962-.111-.8255.0284-.0662.0856-.3216.127-.5676.143-.8468.2882-1.3048.601-1.8957.5478-1.0352 1.6387-2.3495 2.9601-3.5665.8732-.8041 1.703-1.4225 3.6212-2.6988 1.1856-.7888 1.197-.7989 1.3334-1.1792.0303-.0845.1774-.6285.3269-1.209.4655-1.808.764-2.4904 1.3185-3.0139.3128-.2953.8113-.4793 1.1012-.4066.1653.0415.1735.123.0589.5824-.191.7657-.2555 1.2498-.2573 1.9328-.002.6742.04.935.2 1.2509.2196.4333.3677.5169 1.228.6932 3.0422.6234 5.072 1.5605 6.5143 3.0074 1.3358 1.3401 2.4244 3.4373 3.1326 6.035l.1348.4944.258.1976c.6583.5043 1.027 1.0122 1.2235 1.6851.104.3561.0882 1.113-.0326 1.5595-.1288.4762-.2387.6764-.3715.6764-.0374 0-.0784-.037-.098-.0882zm.0564-.9989c.0124-.0493.0143-.2621.004-.473-.0319-.671-.239-1.1503-.7134-1.6507-.3643-.3844-1.0243-.8481-1.207-.8481-.0697 0-.0738.0122-.0557.1653.0108.091.0837.3339.162.5399s.151.4476.1617.5369c.0169.1425.008.1733-.0696.2513-.1072.1072-.2082.1122-.3625.0181-.0636-.0388-.1232-.063-.1324-.0538-.009.0092-.006.0793.007.1557.0469.2777.2078.3892.8252.572.905.268 1.091.391 1.234.8158.0305.0905.1213.0724.1468-.0294zM1.927 18.7054c.1586-.0285.4759-.1113.7052-.184.4928-.156.8703-.2346 1.9132-.398 1.2235-.1915 1.7158-.2934 2.2612-.4676.3468-.1108.6636-.2533.6614-.2975-.0007-.0139-.103-.0871-.2274-.1628s-.357-.2653-.517-.4214c-.1598-.156-.3056-.2838-.324-.2838-.0866 0-.305.122-.5804.3241-.789.5791-1.0654.6936-2.323.9617-.6239.133-.8454.2086-1.1371.3876-.4035.2475-.4905.2885-.7552.3562-.1477.0378-.3812.0687-.519.0687-.3596 0-.3996.1119-.0614.1717.1994.0352.5074.0165.9035-.0549m17.1388-.0708c.026-.0314.1135-.0866.1946-.1226l.1475-.0653.317.096c.3968.1204.917.1382 1.0578.0362l.2022-.1467c.071-.0515.1425-.0774.1806-.0653.0347.011.063.0147.063.0082 0-.035-.486-1.1468-.532-1.217l-.0546-.0833-.1731.1369c-.0952.0752-.418.284-.7172.464-.7685.462-1.0097.6976-.9515.9294.017.0673.0437.0866.1201.0866.0541 0 .1196-.0257.1455-.0571zM4.5789 16.6537c.0832-.0426.1663-.1024.1847-.1329.1444-.2396-.4315-.2143-.5867.0257-.041.0635-.0399.081.008.129.0771.0771.2154.0695.3938-.0218zm1.0839-.7518c.3703-.0994.7409-.2214.8543-.2812.237-.125.4383-.342.5817-.6267.0572-.1135.1639-.262.2372-.33s.1332-.1488.1332-.1793c0-.2679-.9203-.3896-1.5135-.2002-.719.2294-1.4056.9617-1.4222 1.5166-.0102.3401.1762.3567 1.1293.1008m14.1209-1.051c0-.0624-.2294-.3674-.3916-.5208-.3148-.2978-.6364-.4812-1.256-.7164-.3678-.1396-.5195-.2253-.5195-.2933 0-.016.0309-.06.0688-.0979.1932-.1931 1.1182.0449 1.7707.4556.2577.1622.5518.3912.797.6206.1876.1754.2185.1936.2185.1279 0-.1033-.1702-.415-.3775-.6913-.5186-.691-1.3624-1.2293-2.3065-1.471-.7628-.1955-1.4247-.2066-1.9894-.0335-.522.16-1.128.5373-1.7366 1.081-.8566.7651-1.1103.9784-1.3292 1.1175-.1316.0835-.2346.1669-.229.1852.006.0183.1043.0634.2194.1002l.2094.067.5105-.2346c1.0094-.4638 1.936-.7623 2.626-.846 1.0527-.1278 2.23.2049 3.285.9283.3217.2206.43.2764.43.2214m-9.3219 2.9102c-1.0828-.1338-2.1057-.5122-2.941-1.088-.1893-.1305-.2432-.1868-.252-.2634-.0218-.1903.1525-.3028.6232-.4024.414-.0876.6878-.2264 1.3143-.6665.8468-.595 1.1817-.73 1.7337-.6995.2583.0143.4198.0578 1.2761.3437 1.2836.4286 2.6449.9136 2.7472.9787.2346.1493-.1705.7007-.8057 1.0966-.4788.2984-1.111.5328-1.7605.6527-.3579.0661-1.55.0957-1.9353.0481m-8-5.3414c-.0135-.0349-.0156-.2051-.005-.3784.0476-.7618.4617-1.623 1.0257-2.1334.2161-.1956.5614-.4004.675-.4004.1132 0 .1835.1182.268.4504.0445.175.1142.3632.1549.4182s.0687.1046.0623.1102a56 56 0 0 1-.3556.2833c-.462.367-1.102.9582-1.4863 1.3733-.2623.2833-.319.3295-.3393.2768z"
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
export class SvgApachehbaseIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
