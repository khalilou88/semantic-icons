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
  selector: 'svg[si-alfaromeo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Alfa Romeo</svg:title>
    <svg:path
      d="M13.539 5.4052a.2158.2158 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm-9.3055 1.576l-.6533 1.2987-1.3365-.7-.276.5514a.4317.4317 0 0 1 .0917-.0097c.0556 0 .1107.0105.1536.0301l1.4923.7814.8869-1.764zm15.7221.4324l.3109-.1689.509.9792.3498-.1894-.5095-.9791.2969-.1608.7336 1.4093.3494-.1896-1.0138-1.9486c-.0371.0863-.1084.1592-.1651.1888l-1.451.787 1.0071 1.9358.3497-.1897zm-7.2864-2.0084a.2158.2158 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm5.0574 1.5187l.0027.0031c1.1982 1.3498 1.9262 3.1265 1.9262 5.0732 0 3.1035-1.8496 5.7747-4.5065 6.9728-.009.0044-.0178.0093-.0271.0134l.0021-.0018.025-.0116c.4345-.2065.7352-.6488.7352-1.1619 0-.7107-.576-1.2865-1.2867-1.2865l-1.3545-.0012a.1656.1656 0 1 1 0-.3312h2.2875c1.0767 0 1.9496-.8729 1.9496-1.9497 0-1.0767-.8729-1.9497-1.9496-1.9497l-.2906.0003h-1.9184a.1656.1656 0 1 1 0-.3311l1.6868-.0019c1.7798 0 3.2227-1.4428 3.2227-3.2226a3.207 3.207 0 0 0-.5307-1.772l-.0085-.012a.023.023 0 0 1-.0046-.0135c0-.013.0106-.0235.0236-.0235.008 0 .0114.0012.0158.0074zm-3.258 12.3178a7.6339 7.6339 0 0 1-2.459.4041c-1.148 0-2.2368-.2534-3.214-.707v-6.0254h2.1652a2.4299 2.4299 0 0 1-.1227-.765c0-.4029.0986-.783.2719-1.1181H8.7957v-5.969c.9771-.4535 2.0658-.707 3.214-.707 1.3347 0 2.5898.3422 3.6818.9435h.0007c.1562.0988.26.273.26.4717a.5572.5572 0 0 1-.5573.5572l-.0122-.0004h-.1792l-.76.0009c-.2677 0-.4145.079-.5066.159-.2655.2302-.1745.5029-.7192.5029h-1.5022c.2032.4685.6696.8067.7856.8855h1.845a.1784.1784 0 0 1 .1655.112.1561.1561 0 0 1 .0102.0971.1786.1786 0 0 1-.1757.1483H12.468c-.1443.0754-.5827.3489-.785.9661h3.39a.4006.4006 0 1 1 0 .8012l-1.7171-.0002c-1.1836 0-2.1431.9595-2.1431 2.143 0 1.1837.9595 2.1432 2.143 2.1432h2.1414c.0915 0 .1656.0765.1656.168a.1638.1638 0 0 1-.1656.1634h-2.193c-.8671 0-1.5701.7028-1.5701 1.5697 0 .8671.703 1.57 1.57 1.57l.8284.0028c.4185 0 .7632.3512.7632.7667 0 .3396-.2049.5791-.427.7158zm-7.5559-8.2114H4.425c.2368-1.8715 1.1506-3.532 2.4878-4.7287zm0 6.6683c-1.3505-1.209-2.2688-2.8907-2.4943-4.7852h2.4943zm5.097-13.7579c-4.451 0-8.0594 3.6083-8.0594 8.0595 0 4.4508 3.6084 8.0594 8.0593 8.0594 4.4512 0 8.0595-3.6086 8.0595-8.0594 0-4.4512-3.6083-8.0595-8.0595-8.0595zm-.301 2.009h1.9023a.1443.1443 0 0 0 .144-.144.1445.1445 0 0 0-.144-.1442h-1.9023a.1445.1445 0 0 0-.144.1442c0 .0793.0649.144.144.144zm.072-.5445a.2159.2159 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm.2988 2.6522l.027-.0257v-.0002l-.027-.0259c-.421-.3057-.6075-.6844-.7201-.9775-.0777-.202-.1652-.3679-.2925-.4893-.1322-.1258-.2285-.1927-.4192-.1927a.9713.9713 0 0 0-.2302.0292l-.0456.011.0283.0525c.0422.0783.1205.2238.2576.2656a.1193.1193 0 0 0 .0356.0046.386.386 0 0 0 .0332-.0019c.009-.0008.0178-.0017.0261-.0017.0093 0 .0123.0013.0124.0013.148.0856.2255.7166.2255 1.031 0 .0537-.0222.078-.0718.078-.0493 0-.1136-.027-.153-.0641-.0867-.0935-.2107-.146-.347-.146-.2223 0-.458.1499-.4673.4005v.0509c.0094.2506.245.4005.4674.4005.1362 0 .2602-.0525.3469-.146.0394-.037.1037-.0639.153-.0639.0496 0 .0718.024.0718.0778 0 .3144-.0776.9454-.2255 1.031 0 0-.003.0012-.0124.0012a.2845.2845 0 0 1-.026-.0016.386.386 0 0 0-.0333-.0019.1194.1194 0 0 0-.0356.0046c-.1371.0418-.2154.1873-.2576.2656l-.0283.0525.0456.0112a.9836.9836 0 0 0 .2302.029c.1907 0 .287-.0667.4192-.1927.1273-.1214.2148-.2873.2925-.4893.1126-.2931.299-.6718.7201-.9776zm-9.4412 2.1223l-.1222.8035-.6999-.5284zm-1.2738.6372a.2464.2464 0 0 1 .097-.0193.2522.2522 0 0 1 .1233.0318l.0028.0016 1.5266 1.1735.0775-.5098-.3103-.2336.1861-1.2242.3638-.1216.0773-.5089-2.0309.683zM12 23.52C5.6378 23.52.48 18.3622.48 12S5.6379.4803 12 .4803C18.3622.4803 23.5198 5.6378 23.5198 12c0 6.3622-5.1575 11.52-11.5198 11.52zM12 .0003C5.3727.0003 0 5.3728 0 12c0 6.6272 5.3727 11.9997 12 11.9997 6.6274 0 12-5.3725 12-11.9997C24 5.3728 18.6274.0003 12 .0003zm2.6675 2.643c.0793-.23.2747-.3568.5505-.3568.1153 0 .2378.023.364.0684.4398.1581.6498.4752.5349.8078-.0796.2313-.2755.3589-.5513.3589-.116 0-.2393-.0232-.3665-.0689-.4384-.1575-.6471-.4752-.5316-.8095zm.3924 1.2166c.195.0701.389.1057.5764.1057h.0001c.4753 0 .8395-.2332.9743-.624.0951-.276.052-.57-.1214-.828-.1655-.2464-.4383-.4475-.7682-.566-.1902-.0683-.3816-.103-.5682-.103-.4793 0-.8453.2316-.9795.6199-.1917.5552.181 1.1422.8865 1.3954zm3.0944.1594l-.1837 1.4554.023.0215 1.3938-.3266-.766 1.037.3757.3504 1.1621-1.5327-.4317-.4023-1.2158.2723.1485-1.2671-.452-.4215h-.0004l-.0554-.0512c-.0045.0915-.0427.184-.0945.234l-1.2044 1.1699.3777.3522zm3.6243 7.4815a.5396.5396 0 0 1-.0919.008c-.3011 0-.5317-.2627-.602-.6852-.0776-.4672.0937-.8074.437-.8671a.5656.5656 0 0 1 .0904-.0076c.2959 0 .5317.2678.6006.6827.078.4686-.0923.8099-.4341.8692zm.8493-.9418c-.1124-.6738-.5424-1.1443-1.0459-1.1443a.8997.8997 0 0 0-.1481.0128c-.568.0989-.8894.7165-.7643 1.4687.1143.6858.5346 1.1466 1.0457 1.1466a.883.883 0 0 0 .1512-.0132c.5663-.0983.8867-.7167.7614-1.4706zM12.4323 1.7271h.0001c.1613 0 .2707.1156.2722.288.0014.174-.104.2832-.2751.2846l-.9892.0087-.005-.5726zm-1.495 1.5232l.5109-.0045-.0045-.532.8572-.0077.3746.5292.5696-.005-.4303-.5697.053-.0254c.2187-.1048.3427-.3229.3402-.5984-.0037-.4345-.29-.7154-.7288-.7154l-1.5587.0134v.0006l-.09.0005c.0533.0645.0872.1498.0923.2213zm-3.3844.3238l-.7046.4047-.0227-.8766zm-1.1647-.4215l.0006.0034.0334 1.927.4472-.2571-.0108-.3882 1.0735-.6173.3217.209.4463-.2565-1.7995-1.1634-.64.3654a.2541.2541 0 0 1 .1276.1777zM3.748 5.5746L4.9572 6.735l.3507-.3805-.4455-.4277.744-.8074-.2887-.2772-.7443.8074-.344-.3301 1.0713-1.1627-.2887-.277-1.4859 1.6131c.0782.0052.1643.036.22.0802l.0018.0014Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlfaromeoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '981E32');
  }
}
