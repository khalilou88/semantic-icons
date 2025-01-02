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
  selector: 'svg[si-cardano-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Cardano</title>
    <svg:path
      d="M6.5765 11.92c-.0488.8906.6316 1.653 1.5219 1.7056h.0934c.8928-.0006 1.6161-.725 1.6155-1.6178-.0006-.8928-.725-1.6161-1.6178-1.6155-.8578.0006-1.5658.6711-1.613 1.5277Zm-6.025-.416c-.288-.0161-.5345.2042-.5507.4922-.0161.288.2042.5345.4922.5507.2878.0161.5343-.204.5506-.4918.0167-.2876-.2029-.5343-.4905-.5509H.5514Zm5.9226-8.9645c.257-.1309.3593-.4453.2284-.7024-.1309-.257-.4453-.3593-.7024-.2284-.2558.1302-.3585.4424-.2301.6991.13.2582.4448.3622.703.2322.0003-.0002.0007-.0003.001-.0005Zm1.6397 2.8589c.398-.2006.558-.6859.3573-1.0839-.2006-.398-.6859-.558-1.0839-.3573-.3978.2006-.5579.6856-.3575 1.0835.2007.398.686.5581 1.0842.3578ZM2.597 7.3645c.3072.2013.7194.1154.9206-.1918.2013-.3072.1154-.7194-.1918-.9206-.3072-.2013-.7194-.1154-.9206.1918 0 .0001-.0001.0002-.0002.0003-.201.3072-.1151.7191.192.9203Zm.9824 3.8515c-.4453-.0254-.827.3149-.8524.7603s.3149.827.7603.8524c.4453.0254.827-.3149.8524-.7603v-.0006c.0251-.4451-.3152-.8264-.7603-.8518Zm-.8915 5.4221c-.328.1652-.46.565-.2948.893.1652.328.565.46.893.2948.328-.1652.46-.565.2948-.893l-.0002-.0004c-.1645-.3276-.5633-.4598-.8909-.2954-.0006.0003-.0013.0006-.0019.001Zm3.136-7.0931c.4386.2876 1.0274.1653 1.315-.2734.2876-.4386.1653-1.0274-.2734-1.315-.4386-.2876-1.0273-.1653-1.3149.2732-.2878.4381-.166 1.0266.2721 1.3144.0004.0003.0008.0005.0012.0008Zm9.9501-4.2106c.3729.2447.8737.1408 1.1184-.2321.2447-.3729.1408-.8737-.2321-1.1184-.3729-.2447-.8737-.1408-1.1184.2321 0 .0001-.0001.0002-.0002.0003-.2447.3726-.141.8729.2316 1.1176.0003.0002.0005.0003.0008.0005Zm1.6563-2.8499c.2413.1579.565.0904.723-.151s.0904-.565-.151-.723c-.241-.1577-.5642-.0906-.7224.1501-.1584.241-.0915.5648.1495.7233l.0009.0006Zm-1.5296 7.8938c-.8911-.0507-1.6546.6305-1.7053 1.5216-.0507.8911.6305 1.6546 1.5216 1.7053h.0928c.8925 0 1.616-.7235 1.616-1.616 0-.8572-.6693-1.5652-1.5251-1.6134v.0026ZM8.645 9.433c.2737.5459.8331.8896 1.4438.887.8925-.0002 1.6159-.7238 1.6157-1.6163 0-.2526-.0593-.5018-.1731-.7273-.4017-.7971-1.3735-1.1176-2.1706-.7158-.7971.4017-1.1176 1.3735-.7158 2.1706v.0019Zm12.6669-2.0704c.3273-.1666.4575-.567.2909-.8943-.1666-.3273-.567-.4575-.8943-.2909-.3259.1659-.4567.5639-.2927.8908.1652.3284.5653.4607.8937.2956.0008-.0004.0015-.0008.0023-.0012Zm-4.096.5146c-.4683.2362-.6565.8074-.4203 1.2757.2362.4683.8074.6565 1.2757.4203.468-.2361.6563-.8066.4207-1.2749-.2364-.4683-.8074-.6568-1.2762-.4211Zm-5.2768-5.6365c.3667.0205.6806-.2601.7011-.6267s-.2601-.6806-.6267-.7011c-.3655-.0205-.6789.2584-.7009.6238-.0225.3662.2562.6813.6224.7038.0014 0 .0028.0002.0042.0002Zm-.0077 4.1837c.5237.0288.9717-.3724 1.0006-.8961.0288-.5237-.3723-.9717-.8961-1.0006-.5231-.0288-.9707.3714-1.0005.8944-.0298.5237.3706.9724.8943 1.0021h.0017Zm-5.1475 9.6992c.4685-.2359.657-.807.421-1.2755-.2359-.4685-.807-.657-1.2755-.421-.4684.2359-.6569.8069-.4211 1.2754.2362.4682.807.6567 1.2755.4211Zm5.76-8.313c-.4881.7459-.2792 1.7463.4667 2.2344s1.7463.2792 2.2344-.4667.2792-1.7463-.4667-2.2344c-.262-.1715-.5683-.263-.8815-.2635-.5452-.0001-1.0538.2744-1.353.7302Zm2.8109 6.7571c-.4015-.7975-1.3735-1.1185-2.171-.7169-.7975.4015-1.1185 1.3735-.7169 2.171.4015.7975 1.3735 1.1185 2.171.7169.0005-.0002.0009-.0005.0014-.0007.7947-.3952 1.1186-1.3598.7235-2.1545-.0026-.0053-.0053-.0105-.0079-.0158Zm2.8211-.112c-.4386-.2876-1.0274-.1653-1.315.2734-.2876.4386-.1653 1.0274.2734 1.315.4386.2876 1.0273.1653 1.3149-.2732.2877-.4386.1654-1.0274-.2731-1.3151h-.0002Zm3.0963-2.4282c.0254-.4453-.3149-.827-.7603-.8524-.4453-.0254-.827.3149-.8524.7603-.0254.4453.3149.827.7603.8524h.0006c.4451.0251.8264-.3152.8518-.7603Zm2.2349-.5741c-.288-.0161-.5345.2042-.5507.4922s.2042.5345.4922.5507c.2878.0161.5343-.204.5506-.4918.016-.288-.2042-.5345-.4922-.551Zm-2.1043 5.1821c-.3073-.2011-.7194-.115-.9205.1923-.2011.3073-.115.7194.1923.9205.3071.201.719.1151.9202-.1918.2013-.3071.1156-.7193-.1916-.9207l-.0004-.0003ZM6.5695 21.5161c-.2411-.1584-.5649-.0913-.7232.1497-.1584.2411-.0913.5649.1497.7232.2411.1584.5649.0913.7232-.1497.158-.2411.091-.5646-.1498-.7232Zm10.9555-.055c-.257.1309-.3593.4453-.2284.7024.1309.257.4453.3593.7023.2284.2558-.1302.3585-.4424.2301-.6991-.1291-.2579-.4428-.3624-.7007-.2333-.0011.0005-.0022.0011-.0033.0016Zm-6.0691-5.2717c.4892-.7465.2806-1.7482-.4659-2.2374-.7465-.4892-1.7482-.2806-2.2374.4659s-.2806 1.7482.4659 2.2374c.2628.1722.5702.2641.8844.2644.5458.0022 1.0553-.2728 1.353-.7302Zm-3.2301 2.4768c-.3729-.2447-.8737-.1408-1.1184.2321-.2447.3729-.1408.8737.2321 1.1184s.8737.1408 1.1184-.2321c0-.0001.0001-.0002.0002-.0003.2445-.3729.1405-.8734-.2323-1.1181Zm3.7664 3.0931c-.3667-.0209-.6808.2594-.7017.6261s.2594.6808.6261.7017c.3658.0208.6795-.2581.7016-.6238.0222-.3666-.2571-.6817-.6236-.7039-.0008 0-.0015 0-.0023-.0001Zm.007-4.1837c-.5237-.0288-.9717.3724-1.0005.8961-.0288.5237.3724.9717.8961 1.0005.5228.0288.9703-.371 1.0004-.8938.0298-.524-.3709-.973-.8949-1.0028h-.0011Zm3.8861 1.0259c-.3976.2022-.556.6884-.3539 1.086.2022.3976.6884.556 1.086.3539.3961-.2014.5551-.685.3558-1.0821-.2-.3987-.6854-.5598-1.0841-.3597-.0013.0007-.0026.0013-.0039.002Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCardanoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
