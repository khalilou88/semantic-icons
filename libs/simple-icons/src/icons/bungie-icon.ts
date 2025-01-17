import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bungie-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Bungie</svg:title>
    <svg:path
      d="m23.864 12.77-1.1007-.8182V.4648L12.4037.9653 2.044.4656v2.9316L.4312 2.7555c-.06-.0253-.227-.0542-.3499.0823-.1358.1509-.0945.384.0753.484.629.389 1.2582.7778 1.8874 1.1665v7.538c.015 3.2383 2.4585 5.9808 4.8684 7.9678 2.3723 1.9447 4.7727 3.1716 5.0747 3.323.07.0362.2156.1098.4323.218l.4-.2188c.2-.0996 2.6523-1.3367 5.0748-3.323 2.1925-1.8066 4.4-4.2416 4.7946-7.1025l.8598.4236c.1934.0967.4625-.05.451-.2981-.0065-.1693-.1358-.2444-.1357-.2463zM2.408.8476l9.9957.4817c3.3321-.16 6.6643-.3215 9.9964-.4824V11.681l-.4918-.3655.0039-.3609V1.3042l-9.5038.4628-9.503-.4628v2.435l-.4974-.1977Zm15.9223 2.941v-.4464h1.638l-.9531 2.2562h-.5288l.7837-1.8098zM11.857 8.5472c.2416.0972.371.342.371.342l.5955 1.0888 1.9368 1.2795c-.1718.3114-.2337.5578-.2651.6558a.897.897 0 0 0-.0196.0714l.2777 1.4654c-.0142.0047-.0275.0063-.0416.011-.4038.134-.7649.3613-1.1351.5656-.255.1432-.3047.1696-.4323.2157-.355.128-.606.0754-.8198.0164-.0286-.0082-.0575-.0152-.0863-.0228-.2338-.0431-.5844-.3444-.866-.586-.3921-.3351-.5167-.434-.8096-.5664-.0137-.0074-.0283-.013-.0424-.0195l.448-1.5713c-.5937-.966-1.1863-1.9328-1.7792-2.8993a.1434.1434 0 0 1 .0126-.1891l1.2112-2.2538c.0443-.069.1362-.0816.1961-.0423.8363.3395 1.658.7123 2.4812 1.0817.0714.029.1036.113.0738.1867l-.5436.8684c-.0332.0802-.1212.1068-.1836.08l-1.2426-.498-.1874.3082c-.0024.0008.193.0777.8503.4119zm6.7692 6.9738c.0572.1608-.1389.3452-.1805.4903-.0172.0596-.0086.1397-.0298.2016-.0886.2503-.2879.4676-.4165.6974a.2579.2579 0 0 1-.1004-.0306c-.1342-.073.3036-.5828.3389-.644.0839-.1428-.728-.1428-.775-.1663-.1695-.0832-.2958-.3005-.361-.47-.0666-.174-.1223-.495.1036-.5757.0977-.0379.2105.0163.317-.022.0823-.0306.1537-.1263.207-.1867-.2384-.1915-.4612-.2605-.6809-.2605-.3781 0-.7476.2055-1.1728.3538-.2886.055-.5561.098-.6754.1224-.5083.1035-1.015.5397-1.4167.673-.6198.2249-1.1461.1914-1.1971.1875-.5797-.0455-.9579-.0494-1.827-.7829-.452-.3575-.568-.6149-1.7447-.862-.5201-.1043-.9947-.2259-.9665-.5161.0079-.1828.3177-.3562.237-.5398-.0424-.0964-.084-.3286-.0134-.48-.149-.2825-.2855-.3444-.6888-.47-.2398-.0747-.437-.07-.4502-.0674.0156.0808.0196.1656.0054.2464-.0365.1955-.1314.6952-.5161.6314-.0165-.0447.1655-.2541-.1255-.5961-.175-.2017-.5296-.7782-.146-1.0528.4331-.3031.9909-.1012 1.3227.073.103.0886.8765.1811 1.2347.2557.4244.084.7484.4778.4503.7735-.1938.1593-.5036.3781-.353.448.103.023.5009.1161.5766.1373.229.062.491.1412.717.2314.0085.0031.236.0972.3577.1757.4377.2809 1.0308.965 1.5195 1.056.0847.0195.28.0901.5475.0901.3937 0 .7335-.1807.8308-.2377.0651-.0345.1279-.0698.1914-.105.368-.2072.7092-.415 1.066-.5343.2852-.095.4896-.0988.5178-.0988.2503-.0283.4911-.0424.5664-.0667.3742-.1177.757-.2534 1.1477-.2534.5264 0 .8862.245 1.157.6103.0777.1043.4606.641.3562.7743-.116.1506-.3702.3106-.4016.5115-.0304.2039.07.2033.198.1902.128-.013.2343-.0217.2727.088zm-4.5452 2.8908c.0478.0016.0298.066.0635.051.0322-.0157.0596-.0204.0792.033.0251.0698-.065.0416-.0415.0714.0306.04-.0738.1835-.1389.215-.0651.0297-.0627-.0503-.1106-.051-.0494-.0017-.0337.0305-.0565-.0103-.0227-.04-.0063-.0722.0189-.0949.025-.0235-.004-.0651-.004-.0651l-.1192-.375-.9986.8112 1.0041.8911s.164.3436.0824.3397c-.2008-.0071-.3366-.0361-.3366-.0361l-1.11-.9021-1.11.9021s-.1357.029-.3365.036c-.0824.0032.0823-.3396.0823-.3396l1.0042-.8911-.9987-.8112-.1192.375s-.029.0416-.004.0651c.0252.0235.0417.055.019.095-.0228.0407-.0072.0085-.0566.0101-.0478.0008-.0455.0808-.1106.051-.065-.0306-.1694-.175-.1388-.215.0235-.0297-.0667-.0007-.0424-.0713.0196-.0534.0463-.0487.0792-.033.0338.015.015-.0486.0636-.051.0698-.0016.0988-.5232.0988-.5232l-.6166-.5444-.091-.1075s-.0965.0188-.1623-.0431c-.0667-.062-.0863-.2354-.0204-.3146.062-.0738.1945-.0879.309.0227.0651.062.0526.1318.0526.1318l.1114.0942.6519.4957s.5177-.1757.513-.2235c-.0047-.0479.0612-.0377.0424-.0683-.0196-.0298-.0283-.0572.0243-.0823.0667-.033.0486.0596.076.0329.0362-.0353.1954.047.2339.1075.0376.0604-.0432.0674-.0385.116.0047.0471.0353.0291-.0024.0558-.0376.0282-.0721.0141-.098-.0078-.037-.029-.0165-.044-.0165-.044l-.4064.2723 1.0065.8935 1.0065-.8935-.4064-.2723s.0204.015-.0164.044c-.026.022-.0604.0353-.0981.0078-.0377-.0267-.0071-.0086-.0024-.0557.0047-.0487-.076-.0557-.0384-.1161.0392-.0604.1976-.1428.2337-.1075.0267.0267.0094-.0667.0761-.033.0526.0252.0447.0526.0243.0824-.0188.0306.0471.0204.0424.0683-.0039.0478.513.2235.513.2235l.652-.4957.1113-.0942s-.0133-.0698.0518-.1318c.1145-.1106.2471-.0965.309-.0227.066.0792.0464.2526-.0203.3146-.066.062-.1624.0431-.1624.0431l-.091.1075-.6166.5444c.0012-.0004.0341.5232.1005.5232zM12.089 6.459c-.1982-.0848-.3838-.1637-1.2763-.5452l.7719-1.2998a.144.144 0 0 1 .1945-.0502l.9469.56a.1412.1412 0 0 1 .051.193zm.9367-.9837c.0426-.0698.1337-.0853.1953-.047l.8653.5122a.14.14 0 0 1 .047.1938c-.1688.2688-.4737.7593-.6887 1.1045a.4022.4022 0 0 0-.164-.2244.3808.3808 0 0 0-.0972-.0596l-.8379-.3758Zm1.2763.8715a.1432.1432 0 0 1 .1962-.0455l.7781.4582a.141.141 0 0 1 .0455.1937c-.8974 1.4307-1.0436 1.667-1.2983 2.0734-.0063.011-.011.022-.0165.033a.141.141 0 0 1-.1906.04l-.7774-.459c-.1067-.0648-.053-.1937-.0455-.1937.0057 0 .466-.7403 1.3085-2.1zm1.1477.8888a.1462.1462 0 0 1 .1969-.0462l.6166.3679a.1401.1401 0 0 1 .047.1937L15.1 9.6784c-.0447.071-.1377.0833-.1954.0463l-.6181-.3687a.1383.1383 0 0 1-.0455-.193zM.2868 3.1015c-.0536-.0318-.0323-.1258.0502-.1068L7.224 5.7325l-.1295-2.4044 3.4893 2.4703s-.04-.0165-.0996-.0165c-.1155 0-.2056.0594-.229.117-.2357.4394-.4724.8785-.7084 1.3178l-.888-.6205-.375 1.4466Zm17.376 16.6118c-2.3864 1.958-4.8198 3.1865-5.012 3.2822l-.2393.1302c-.0825-.0422-.1652-.0842-.2479-.1263-.211-.1043-2.6389-1.332-5.0198-3.2861-2.3855-1.9596-4.7334-4.6456-4.7358-7.687v-7.312c.1663.1017.3316.205.4974.3075v7.0076c0 5.7988 8.9264 10.3456 9.3069 10.5362l.2047.1043.1899-.1043c.3687-.186 8.8205-4.4958 9.2778-10.0702.1528.0746.305.1506.4574.226-.3232 2.7534-2.4766 5.1837-4.6794 6.9919zm6.0239-6.624h-.0016c-.0086 0-.022-.004-.022-.004l-5.5383-2.7284-.3805 2.5566-4.651-3.1112-.637-1.1735L14.495 9.781l.2761.1648c.0694.0428.1822.0604.2165.0604.2125 0 .3294-.1921.3295-.1922l.1482-.2361.142-.2095 1.074.8865.3412-2.2522 6.693 4.9774c.0502.0326.0274.1076-.029.109z"
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
export class SiBungieIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0075BB');
}
