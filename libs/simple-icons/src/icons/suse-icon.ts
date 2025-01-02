import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-suse-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>SUSE</title>
    <svg:path
      d="M22.6691 10.2274a.392.392 0 0 1-.4295 0c-.2108-.14-.2311-.4327-.061-.602a.3828.3828 0 0 1 .5515-.0002c.1698.1695.1492.4622-.061.6022m-1.12.8819c-.5308-.1245-.952-.5457-1.0768-1.0762-.2444-1.0419.6924-1.9787 1.7346-1.7346.5305.1241.952.545 1.0768 1.0759.2451 1.0425-.692 1.98-1.7346 1.7349zm-5.0114 4.374c.0394.1174.0898.2723.2057.3346.0064.0035.012.0066.019.0085.2128.0775.7598.0645.7598.0645h1.006c.086.0013.8419-.001.8228-.0854-.091-.4041-.5584-.4765-.9142-.688-.328-.1955-.6391-.417-.78-.7984-.0737-.1968-.0302-.6508.0965-.8162.0923-.1196.2285-.199.3749-.231.1622-.0347.3305-.0048.4927.0117.2.0203.3974.0565.5968.0813a7.4343 7.4343 0 0 0 1.1613.0596c.6403-.0177 1.2822-.1197 1.8892-.3266.4238-.1423.8413-.3346 1.2016-.6023.4095-.3044.3019-.2758-.1134-.2333-.4971.0508-.9987.0584-1.4974.0289-.4654-.027-.9245-.082-1.3454-.2981-.3314-.1711-.6162-.3425-.879-.6076-.0394-.04-.0639-.1568.0082-.2314.0698-.0724.2178-.0305.2632.0082.4584.3832 1.1422.6987 1.8501.733.3829.019.7553.026 1.1384.0095.1915-.0088.4804-.0076.6724-.0095.099-.0012.3692.0273.4197-.0778.0152-.0304.014-.0657.0127-.1-.0562-1.532-.1695-3.26-1.7727-3.9923-1.1962-.547-2.9895-1.3943-3.747-1.7458-.1755-.0834-.381.0486-.381.2442 0 .5117.026 1.247.0264 1.9162-.3629-.3696-.974-.6029-1.4397-.8169-.5289-.2425-1.0749-.4482-1.6305-.6212-1.1184-.3464-2.2758-.5597-3.44-.6753-1.3203-.1317-2.6628-.0685-3.9628.2-2.141.4438-4.2454 1.4734-5.8429 2.979-.9806.924-1.7501 2.2373-1.8021 3.5703-.0743 1.8867.4543 2.8997 1.4257 3.9439 1.5492 1.664 4.8835 1.8971 6.234-.0762.6076-.8883.7394-2.093.2984-3.075-.441-.9812-1.4546-1.6904-2.5292-1.7266-.834-.0276-1.7225.3965-2.0422 1.1676-.2438.5889-.1051 1.3165.339 1.7736.173.1785.4073.3245.6632.2673.1508-.0336.2768-.147.2997-.3.0336-.2257-.1638-.372-.2854-.5453-.2194-.3127-.175-.7823.0997-1.048.2317-.2244.5749-.2908.8974-.2898.3003.0006.6073.0543.8664.2057.3641.2143.606.6067.6898 1.0213.2499 1.239-.7574 2.2457-2.1232 2.3247-.6987.0413-1.4098-.1422-1.9552-.5813-1.3813-1.111-1.7197-3.3822-.141-4.5946 1.4988-1.1508 3.3908-.8542 4.5064-.2561.8927.4784 1.558 1.2612 2.0622 2.1266.253.4353.4686.8902.6686 1.352.1924.4442.3724.8918.7575 1.2172.2549.2159.5695.2083.9034.2083h1.9064c.259 0 .1959-.1727.0841-.287-.2527-.2584-.6158-.3168-.952-.4092-.7686-.2114-.6902-1.2289-.4775-1.2289.687 0 .7086.0206 1.3105.013.8685-.012 1.1314-.0625 1.8108.1886.3631.1346.712.4895.9397.814.119.171.218.3365.2736.5019Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSuseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
