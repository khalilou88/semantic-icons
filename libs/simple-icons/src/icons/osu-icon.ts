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
  selector: 'svg[si-osu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>osu!</svg:title>
    <svg:path
      d="M7.698 10.362c-.1855-.2184-.4189-.3905-.7002-.5162-.2813-.1257-.6104-.1885-.9874-.1885s-.7046.0628-.9829.1885-.5088.2978-.6912.5162c-.1827.2185-.3203.4773-.413.7765-.0928.2993-.1391.6194-.1391.9605 0 .3412.0463.6584.1391.9516.0927.2933.2303.5491.413.7675.1824.2185.4129.3891.6912.5116.2783.1226.6059.1841.9829.1841s.7061-.0615.9875-.1841c.2813-.1226.5146-.2931.7002-.5116.1855-.2184.3231-.4742.413-.7675.0897-.2931.1346-.6104.1346-.9516 0-.3411-.0449-.6612-.1346-.9605-.0899-.2992-.2276-.558-.4131-.7765zm-.965 2.8096c-.1467.2484-.3875.3725-.7227.3725-.3291 0-.567-.1241-.7136-.3725-.1467-.2483-.2199-.6059-.2199-1.0727s.0732-.8243.2199-1.0727c.1466-.2482.3844-.3725.7136-.3725.3352 0 .5759.1243.7227.3725.1466.2484.2199.6059.2199 1.0727.0001.4668-.0733.8245-.2199 1.0727zm11.8894-.8303-.0898-4.3896a4.5409 4.5409 0 0 1 .6912-.0539c.2334 0 .4668.0179.7002.0539l-.0898 4.3896c-.2096.0359-.41.0538-.6015.0538a3.4957 3.4957 0 0 1-.6103-.0538zm1.3196 1.4003c0 .2215-.0179.443-.0538.6643a4.2055 4.2055 0 0 1-.6553.0538 4.1414 4.1414 0 0 1-.6642-.0538 4.0882 4.0882 0 0 1-.0539-.6553c0-.2154.018-.4367.0539-.6643a4.0876 4.0876 0 0 1 .6552-.0538c.2155 0 .4368.018.6643.0538.0359.2276.0538.446.0538.6553zm-3.2226-4.0305c.2095 0 .422.018.6373.0539v4.4614c-.1916.0659-.4443.1302-.7585.193-.3141.0629-.6418.0943-.9829.0943-.3052 0-.5985-.024-.8798-.0718-.2813-.0479-.5282-.1495-.7405-.3052-.2125-.1555-.3815-.3829-.5072-.6823-.1257-.2991-.1885-.697-.1885-1.1938V9.765a3.8725 3.8725 0 0 1 .6373-.0539c.2094 0 .4219.018.6373.0539v2.4596c0 .2455.0194.4474.0584.6059.0388.1586.0988.2843.1795.377a.6606.6606 0 0 0 .3007.1974c.1197.0391.2603.0584.4219.0584.2214 0 .407-.0209.5566-.0628V9.765a3.8218 3.8218 0 0 1 .6284-.0539zm-4.3625 2.6841c.0538.1497.0808.3321.0808.5476 0 .2215-.0464.428-.1392.6194-.0928.1916-.2274.3577-.4039.4982-.1766.1407-.3905.2514-.6418.3322-.2514.0808-.5356.1212-.8528.1212a5.2984 5.2984 0 0 1-.395-.0135 3.1226 3.1226 0 0 1-.3456-.0448 4.0482 4.0482 0 0 1-.3277-.0763 3.9336 3.9336 0 0 1-.35-.1166 2.5768 2.5768 0 0 1 .0852-.4893 3.0737 3.0737 0 0 1 .1751-.4802c.1975.0779.3844.1362.561.1751.1765.039.3605.0584.5521.0584.0838 0 .175-.0075.2738-.0225a.9945.9945 0 0 0 .2737-.0808.6467.6467 0 0 0 .2109-.1526c.0569-.0628.0853-.145.0853-.2469 0-.1436-.0434-.2469-.1302-.3097-.0868-.0628-.208-.1181-.3636-.1661l-.5565-.1616c-.3352-.0956-.5969-.2379-.7855-.4263-.1885-.1886-.2827-.4713-.2827-.8484 0-.4547.163-.8108.4892-1.0682.3261-.2573.7705-.386 1.333-.386.2334 0 .4638.0211.6913.0629.2273.0419.4578.1048.6912.1885-.012.1557-.0419.3173-.0897.4847-.048.1676-.1048.3142-.1706.4398a3.58 3.58 0 0 0-.4757-.1571 2.18 2.18 0 0 0-.5477-.0673c-.2034 0-.3621.0314-.4758.0943-.1137.0629-.1705.1631-.1705.3007 0 .1317.0403.2244.1211.2783.0809.0538.1959.1048.3456.1526l.5117.1526c.1675.048.3187.1063.4533.1751.1347.0688.2498.1541.3456.2558.0958.1016.1707.2272.2246.3768zM12 0C5.3726 0 0 5.3726 0 12.0001 0 18.6273 5.3726 24 12 24c6.6275 0 12-5.3727 12-11.9999C24 5.3726 18.6275 0 12 0zm0 22.8c-5.9647 0-10.8-4.8354-10.8-10.7999C1.2 6.0353 6.0353 1.2 12 1.2s10.8 4.8353 10.8 10.8001C22.8 17.9646 17.9647 22.8 12 22.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOsuIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF66AA');
  }
}
