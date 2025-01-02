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
  selector: 'svg[si-webmin-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Webmin</title>
    <svg:path
      d="M9.3006 0c-1.5504.0058-2.6602 1.1575-2.503 3.0064.1018 1.2276.2082 2.4735.3125 3.7292-1.0796.4547-2.2182.9333-3.4283 1.4455-1.2547.5358-2.1224 1.6093-2.4566 2.8852-.3401 1.3009-.1354 2.808.7228 4.143.7636 1.1953 1.8562 2.0058 3.2547 2.4454-.0804 1.0912.0302 2.0788.3407 2.954a5.464 5.464 0 0 0 .5328 1.0981c.798 1.2684 1.9783 2.029 3.183 2.2356 1.184.2028 2.3797-.13 3.294-.9992.98-.9452 1.9066-1.8373 2.7905-2.6834 1.0466.6293 2.0551 1.2355 3.0367 1.8269 1.6047.957 3.2437-.0836 3.6308-2.1144.1616-.8468.0895-1.7933-.2113-2.863.571-.3511.926-.901 1.0664-1.671.3057-1.6334-.5026-3.7813-1.8262-4.8797a944.4632 944.4632 0 0 0-2.166-1.7848c-.0034-.0188-.371-2.1056-.5514-3.1098-.306-1.7243-1.7984-3.5393-3.3736-4.0403-.7224-.2305-1.3943-.1586-2.036.2239-.7784-.8241-1.5919-1.379-2.4788-1.6628C10.0398.0586 9.6584-.0013 9.3006 0zm1.0184 2.4795a1.322 1.322 0 0 1 .3814.0473c.4661.1252.9114.4903 1.1543.9326.1987.3678.29.6704.3703 1.2978.1317 1.03.2665 2.0738.4035 3.143.0136.0984.027.1947.0384.2927.1154.8888.644 1.5284 1.3295 1.6192.6596.0878 1.0102-.4298.8898-1.2608a12.1931 12.1931 0 0 0-.0377-.2763 2387.9439 2387.9439 0 0 0-.4412-3.0057c-.0635-.425-.0843-.75-.0495-.96.0511-.4654.4213-.7077.895-.5794.4787.1313.9267.5723 1.1337 1.0982.1067.266.1547.4722.2365.9637.157.941.3118 1.89.4722 2.8674.1177.638.1772 1.202 1.0443 1.8048.7299.5736 1.442 1.1397 2.1417 1.6864.4207.3311.5725.4842.739.7176.2694.3795.382.933.2875 1.3576-.087.3928-.341.628-.6585.5905-.2603-.031-.4792-.1375-.9238-.4648-.7333-.5498-1.4835-1.113-2.2592-1.6843-.0681-.048-.144-.1008-.2136-.1522-.6455-.4757-1.2088-.384-1.424.266-.223.666.0904 1.448.7545 1.9134.0715.0492.1528.1067.2224.1574.8094.5672 1.6055 1.1207 2.3804 1.6599.3285.2293.573.444.7346.6377.3572.4094.5276 1.0814.4043 1.6429-.1325.593-.5142.9019-.9785.796-.2342-.05-.4106-.1448-.8314-.4176-.817-.5301-1.657-1.0785-2.523-1.637a5.0836 5.0836 0 0 1-.2373-.1589c-.2724-.1672-.5363-.2426-.7678-.2335h-.0022c-.2596-.017-.5308.0771-.7915.286-.0727.0594-.1459.1171-.2136.181-.8083.6649-1.6461 1.3742-2.5342 2.121-.4805.4008-.6964.5576-1.0169.6704-.6459.2463-1.359-.0303-1.8054-.7398-.4212-.692-.4027-1.5886.0332-2.1542.185-.2517.498-.539.9297-.8448.9396-.672 1.83-1.3056 2.676-1.9126a10.921 10.921 0 0 0 .2277-.1581c.6417-.4552.764-1.2606.3119-2.0117-.4409-.7492-1.1696-.976-1.861-.5587a5.3786 5.3786 0 0 0-.2335.1456c-.8948.549-1.834 1.1279-2.8238 1.739-.6383.3848-.9758.5083-1.4522.5306-.5892.0302-1.2047-.3318-1.5638-.9031-.4068-.6365-.4212-1.4274-.0303-1.9178.2194-.2883.455-.4634 1.1292-.8092a274.597 274.597 0 0 1 2.996-1.5261c.0814-.0492.1625-.083.2461-.1242a1.0729 1.0729 0 0 0 .1597-.0976c.4253-.1876.6323-.6568.566-1.2933-.0117-.1063-.019-.209-.0369-.311a375.454 375.454 0 0 0-.351-3.3161c-.0693-.66-.0626-.8925.0214-1.1544.1-.3124.39-.4922.7516-.5025zM7.1101 6.737l.0023.0252c-.0009-.0012-.0016-.001-.003-.0045v-.0051a.236.236 0 0 0-.0007-.0133s.001-.0013.0015-.0023zm.003.0414c.0025.0304.0056.0598.0081.0902-.0034-.0271-.0064-.0524-.011-.0828 0-.0016.0018-.0047.0029-.0074zm.0118.136l.0023.0251h-.0023V6.924c0-.0026.002-.005-.0007-.0081 0 0 .0006-.001.0007-.0015zm.0037.0414c.0005.0052.0003.0103.0008.0155-.0002-.0011-.0008-.0026-.0008-.0037-.0007-.0027-.003-.0047-.003-.0074.0027-.0012.0027-.0028.003-.0044z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWebminIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
