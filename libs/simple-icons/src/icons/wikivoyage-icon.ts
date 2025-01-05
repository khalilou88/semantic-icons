import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-wikivoyage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wikivoyage</svg:title>
    <svg:path
      d="M22.9171 14.1784c-.4303 0-.782-.1366-1.0551-.4097-.2731-.2731-.4097-.6229-.4097-1.0492 0-.4253.1183-.7758.355-1.0513.2367-.2756.5425-.4133.9173-.4133.4072 0 .7216.1287.9431.3862.2215.2574.3323.6169.3323 1.0784v.1558H22.134c.0196.1606.0774.3017.1736.4233.1826.1692.3935.2537.6326.2537.1753 0 .3382-.0309.4885-.0926.1504-.0618.3407-.167.5712-.3155v.6475c-.1888.1426-.3662.2427-.532.3003-.166.0576-.3496.0864-.551.0864zm.4448-1.7748c-.0222-.133-.0706-.25-.1452-.3512-.1048-.1434-.2591-.215-.463-.215-.1808 0-.3297.0777-.4467.2334-.0802.1045-.134.2155-.1613.3328zm-3.7305 1.063c0 .036.0493.0798.148.1312.0987.0515.2261.0893.3822.1135.3783.0603.6517.1617.8203.304.1687.1424.253.3492.253.6204 0 .2661-.1247.4752-.374.6273-.2494.152-.58.2281-.9918.2281-.3867 0-.6964-.0817-.9292-.2452-.2327-.1635-.349-.3863-.349-.6686 0-.1946.0623-.3617.187-.5012.1248-.1395.2704-.218.4368-.2355-.1399-.0675-.2098-.1708-.2098-.3098 0-.1509.0928-.2761.2786-.3757.0444-.0242.0769-.0284.0973-.0125-.0726-.003-.1522-.0437-.239-.1221-.2002-.1856-.3003-.4227-.3003-.7114 0-.2898.1003-.5277.3007-.7136.2005-.1859.4573-.2788.7705-.2788.079 0 .1534.0058.2232.0176h1.099v.5445h-.3792c.0829.088.1257.2513.1284.4898 0 .2484-.1014.4669-.3042.6554-.1767.1625-.3991.253-.6674.2717l-.1795.0112a.3656.3656 0 00-.1332.0502c-.0456.029-.0684.0656-.0684.1094zm.2814-1.614c-.132 0-.24.0422-.3243.1264-.0841.0842-.1262.1942-.1262.3301 0 .1366.0419.2463.1257.3293.0838.0829.192.1244.3248.1244.1321 0 .2403-.0417.3244-.125.0842-.0832.1262-.1928.1262-.3287 0-.1353-.0424-.2454-.1273-.3304-.0841-.084-.1919-.126-.3233-.126zm-.7042 2.7277c0 .1078.0595.1972.1784.2683.119.071.2816.1066.4878.1066.2254 0 .4016-.03.5285-.09.127-.06.1904-.1347.1904-.2237 0-.0942-.0432-.1743-.1296-.2404-.0865-.0661-.2155-.1129-.387-.1402l-.0753-.0117a2.2197 2.2197 0 00-.2005-.0208c-.065-.0036-.1138-.0025-.1465.0033-.125.02-.225.0531-.3.0995-.0975.0607-.1462.1437-.1462.2492zm-2.382-.402c-.2113 0-.3806-.0667-.5076-.2002-.127-.1335-.1906-.3071-.1906-.521 0-.1895.0624-.353.1873-.4903.125-.1374.31-.25.5553-.338l.651-.2353v-.1258c0-.139-.0326-.2387-.0978-.299-.0652-.0603-.1721-.0905-.3207-.0905-.1661 0-.3145.0318-.4453.0953-.1307.0636-.2887.1698-.4742.3188v-.6237c.143-.1476.288-.2534.435-.3176.1468-.064.3103-.0961.4903-.0961.348 0 .614.0868.7981.2603.184.1736.276.4244.276.7525v1.3498c0 .022.0031.036.0093.042.0062.0063.0172.0093.0333.0093.0133 0 .0416-.0136.085-.041.0433-.0272.1262-.069.2486-.1252v.4182c-.0778.0778-.1734.1387-.2867.1828-.1134.044-.2214.066-.324.066-.119 0-.2193-.036-.3008-.1081-.0604-.0553-.0921-.1057-.0952-.1513-.0136.0453-.0612.0888-.1427.1305-.1794.0918-.374.1377-.5836.1377zm.6955-.625v-.751l-.257.1198c-.1584.0563-.2747.1243-.349.2038-.0744.0794-.1116.1724-.1116.2788 0 .0802.03.1447.09.1937.06.049.1414.0734.244.0734a.6166.6166 0 00.2578-.058 2.2801 2.2801 0 01.2-.0808zm-1.4784-2.1772L14.15 15.564h-.7242l.9329-2.1137-1.0612-2.1337h.7079l.7125 1.5336.6388-1.5336h.6868zm-4.3623 2.788c-.4608.0199-.8472-.1217-1.1267-.3951-.2795-.2734-.4192-.623-.4192-1.0488 0-.427.1399-.778.4196-1.0527.2797-.2746.6387-.412 1.0772-.412.4378 0 .7973.1375 1.0784.4125.281.275.4216.6257.4216 1.0521 0 .4254-.1404.7749-.4211 1.0485-.2808.2736-.635.3956-1.0298.3956zm-.0025-.5496c.2204-.0198.3935-.0987.547-.2603.1535-.1617.2303-.373.2303-.634 0-.263-.0768-.4759-.2304-.6384-.1536-.1626-.3514-.2439-.5935-.2439-.2426 0-.44.0812-.5924.2434-.1523.1623-.2285.3752-.2285.6388 0 .2625.076.4741.228.635.152.161.3527.2594.6395.2594zm-4.4176-2.2977H7.9537l.6612 1.656.664-1.656h.6875l-1.2286 2.8421H8.486zm9.2173-.7027V7.8232h.6733v2.8515h-.5401zm.3366-3.963c.1103 0 .2034.038.2793.1138.0759.0759.1138.167.1138.2733a.3727.3727 0 01-.1133.2735c-.0756.0756-.1688.1133-.2798.1133-.1116 0-.205-.0376-.2803-.1128-.0752-.0752-.1128-.1666-.1128-.274a.373.373 0 01.1133-.2738c.0755-.0755.1688-.1133.2798-.1133zm-2.6679-.1823v4.2063h-.6732V6.4082h.6732zm1.2855 4.1457L14.041 9.2523l1.258-1.4287H16.0557l-1.199 1.4145 1.4127 1.4369h-.7034zm-3.3006-.0004V7.8232h.6733v2.8515h-.5401zm.3366-3.963c.1103 0 .2034.038.2793.1138.0758.0759.1138.167.1138.2733a.3728.3728 0 01-.1133.2735c-.0756.0756-.1688.1133-.2798.1133-.1116 0-.205-.0376-.2803-.1128-.0752-.0752-.1128-.1666-.1128-.274a.373.373 0 01.1133-.2738c.0755-.0755.1688-.1133.2798-.1133zM8.49 10.717L7.2613 7.824h.6986l.6615 1.6798.682-1.7213h.4222l.6763 1.7124.6642-1.671h.6998l-1.242 2.893h-.2561l-.762-1.843-.7593 1.843h-.1277zm3.7676 6.3222l4.0081 6.0705.4359-7.2612a4.6007 4.6007 0 01-4.444 1.1907zM7.2613 6.4082L0 6.8441l6.0705 4.0081a4.6007 4.6007 0 011.1908-4.444zm11.705.9885L22.2197.8903l-6.5064 3.2532a4.6008 4.6008 0 013.2532 3.2532z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWikivoyageIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#006699');
  }
}
