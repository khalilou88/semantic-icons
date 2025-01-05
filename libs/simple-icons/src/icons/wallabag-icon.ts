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
  selector: 'svg[si-wallabag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wallabag</svg:title>
    <svg:path
      d="M20.376.0007c-.0433-.0046-.0911.014-.1388.0528-.1028.0835-.9982.2919-1.529.7058-.857.6687-1.3854 1.9404-1.6248 2.6435a5.6065 5.6065 0 00-.047.1408c-.1116.2692-.3343.2698-.3343.2698a3.0022 3.0022 0 00-.3246-.0176c-.097 0-.1948.0043-.2913.0137-.0022.0004-.0037-.0002-.006 0-.284.0419-.4404-.3045-.473-.3871-.332-.9534-1.2247-2.8338-3.232-3.3397 0 0-.3653-.2788-.2543.1935.1057.4514.3243.9065.2757 1.5701-.0223.3063-.2117 1.877 1.2318 2.6944.1372.0777.26.1445.3696.1995-.7266.5814-1.3884 1.39-1.9533 2.3092.287-.1764 1.836-.9975 4.3328.0332 2.5684 1.06 4.1607.139 4.3582.0137-.6209-1.0206-1.358-1.9094-2.1743-2.5066.0544-.015.1094-.0297.1681-.047 1.0826-.313 1.3577-1.2306 1.4156-2.0158.0655-.8905.1097-.9039.303-1.705.1392-.5772.0578-.8074-.0723-.8212zM13.2022 9.03c-.2261 0-.4135.0631-.5553.1877-.1458.1276-.219.2755-.219.44v2.841c0 .3573.0352.696.1037 1.005.0706.316.1934.592.3656.8231.174.2335.41.4188.702.5494.2888.1287.6495.1936 1.0733.1936.4417 0 .8113-.0828 1.099-.2444.2413-.1355.4447-.313.6062-.5299.1556.217.3546.3945.5924.53.284.1615.6595.2443 1.1165.2443.4237 0 .7841-.0666 1.0695-.1955.2878-.1305.5217-.3144.696-.5475.1726-.2319.2958-.508.3657-.8232.0685-.309.1017-.6476.1017-1.005v-2.841c0-.1637-.0699-.312-.2112-.44-.1378-.1252-.3271-.1876-.5611-.1876-.2123 0-.389.0635-.524.1896-.1366.1277-.2053.275-.2053.438v2.886c0 .3872-.068.6726-.2034.8486-.1308.17-.3403.2522-.6394.2522-.306 0-.516-.0814-.6393-.2502-.1287-.176-.1936-.4623-.1936-.8506V9.646c0-.1973-.0896-.3575-.26-.4653-.2317-.146-.4609-.1987-.741-.1056a1.1842 1.1842 0 00-.2406.1095.6958.6958 0 00-.1955.178c-.0579.0776-.088.1612-.088.2502v2.931c0 .3878-.0649.6743-.1936.8504-.1236.1688-.332.2503-.6374.2503-.3064 0-.5181-.0829-.6452-.2522-.132-.176-.1994-.461-.1994-.8486v-2.886c0-.1632-.0686-.3104-.2053-.438-.135-.1262-.3142-.1896-.5338-.1896zm-3.0521 5.774a5.613 5.613 0 00.3363 1.0324c.1197.6731.2803 2.2572-.481 3.6446-.6706 1.2223-3.981 2.8883-8.8945 1.9318 0 0-.1964-.1367-.2561-.0235-.0883.1675.272.303.6433.4008 3.4209.906 8.583.5362 10.204-.7997.7398-.609 1.0264-1.4282 1.099-2.311 0 0 .0197-.2306.309-.0568.0828.0498.3824.2452.43.4654.0417.3133.0445.6964-.1172.9659-.2314.3854-.2341.4414.0703.6589.187.1334.9515.6952 2.014 1.3335.0026.0018.0031.0025.0058.0039.2247.1353.5377.4673.5377.4673.4785.5534 1.518 1.6664 1.971 1.4566.2138-.099-.0079-.5436-.0079-.5436s.3545.4607.5456.3031c.1454-.12-.0841-.5807-.0841-.5807s.3099.2699.4947.1701c.226-.122-.0326-.8295-1.8105-1.9103-1.7787-1.0817-2.261-1.2476-2.3033-1.7304 0 0-.0014-.023 0-.0645.0138-.1066.0739-.3332.3324-.309a7.454 7.454 0 001.1889.0958 7.391 7.391 0 001.355-.1231s.0226-.0048.0293-.006c.051-.0064.1502-.0025.1506.1213-.0162.1569-.0602.3136-.1526.4516-.26.3897-.174.4438.0978.6942.1677.1544.9373.8313 1.9905 1.486.0022.0016.0014.0026.0039.0039.2245.1351.614.5064.614.5064.4364.4432 1.2384 1.1847 1.6757 1.14.2958-.0302.0547-.5397.0547-.5397s.3737.3603.5573.2542c.2052-.1184-.0841-.4947-.0841-.4947s.2407.1283.4106.086c.1704-.0424.2125-.4768-1.5564-1.572-1.769-1.0961-2.364-1.4811-2.3267-1.9005 0 0 .0002-.0682.0176-.172.043-.2223.1784-.601.612-.8174a.2517.2517 0 00.0372-.0235c1.3783-.7998 2.386-2.0874 2.7413-3.6954-.3577.8882-3.0083 1.578-6.2275 1.578-3.218 0-5.87-.6898-6.2275-1.578z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWallabagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#3F6184');
  }
}
