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
  selector: 'svg[si-owncloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>ownCloud</title>
    <svg:path
      d="M5.1888 9.5202c-.1375-.2475-.22-.5317-.22-.825 0-.926.7517-1.6776 1.6776-1.6776.3392 0 .66.1008.9259.2842a3.5233 3.5233 0 0 0-.3117 1.4576c0 .0916.009.1925.009.2841-.0642 0-.1284-.0091-.2017-.0091a3.6837 3.6837 0 0 0-1.8793.4858zm-.3667 6.518c-.9717-.7059-1.6135-1.8518-1.6135-3.1444 0-.33.0458-.6509.1192-.9534H3.227C1.4485 11.9404 0 13.3888 0 15.1673c0 1.7785 1.4485 3.2269 3.227 3.2269.6784 0 1.3109-.2109 1.8334-.5684-.2108-.33-.3392-.7334-.3392-1.155 0-.22.0367-.431.1009-.6326zm.1375-.3484c.2933-.5592.8159-.9717 1.4484-1.1.055-.0092.1192-.0184.1834-.0275.0642-.0092.1191-.0092.1833-.0184h.0825c.1009 0 .1925.0092.2934.0184-.0275-.22-.0458-.44-.0458-.6693 0-1.0817.3575-2.0901.9534-2.906-.1375-.165-.2567-.3483-.3575-.5409l-.0825-.165c-.0275-.055-.055-.11-.0733-.165-.0917-.2292-.165-.4675-.2109-.715-.0825-.0092-.165-.0092-.2475-.0092-.605 0-1.1826.1558-1.6776.4309-.055.0275-.11.0641-.165.0916-.055.0367-.1009.0642-.1559.1009-.5684.3942-1.0176.9534-1.2742 1.6043-.0183.055-.0458.1191-.0642.1741-.0183.055-.0367.1192-.055.1742a3.4222 3.4222 0 0 0-.1284.926c.009 1.1367.5592 2.1542 1.3935 2.796zm11.3216-4.1344c.4675-.2475.99-.3942 1.5493-.4309-.1467-1.65-1.531-2.9519-3.2177-2.9519-.0642 0-.1284 0-.1925.0092.0275.1834.0458.3759.0458.5684 0 .3025-.0367.5959-.11.8709.8067.4492 1.485 1.1184 1.925 1.9343zm-8.608-2.301c.009.0642.0274.1283.0366.1925.0367.1467.0733.2934.1284.4309.0275.0641.0458.1191.0733.1833.0275.055.055.1192.0825.1742.0825.165.1833.3208.2933.4675.2292-.2567.4767-.495.7517-.7059.055-.0366.1009-.0733.1559-.11l.165-.11c.7425-.4767 1.6226-.7517 2.5577-.7609h.0642c.0642 0 .1191 0 .1833.0092.0825 0 .165.0092.2475.0183.5684.0459 1.1.1926 1.5951.4217.0458-.2291.0733-.4583.0733-.7058 0-.1834-.0183-.3576-.0458-.5226-.009-.0641-.0183-.1192-.0367-.1833-.009-.0642-.0275-.1192-.0458-.1742-.3667-1.3751-1.6134-2.3652-3.0894-2.3652-1.2192 0-2.2826.6784-2.8327 1.6685-.0275.055-.0642.11-.0917.165-.0275.0642-.055.1192-.0825.1833-.1466.3759-.2383.7793-.2383 1.2101 0 .11.009.2109.0183.3209.0183.0641.0275.1283.0367.1925zm14.5576 5.4637a1.426 1.426 0 0 0-.2842.0275c.009.0825.009.165.009.2384 0 1.0267-.4034 1.9618-1.0634 2.6585.3209.3758.8067.6142 1.3384.6142.9718 0 1.7693-.7976 1.7693-1.7693 0-.9717-.7975-1.7693-1.7693-1.7693zm-.6509.1192c0-.0642-.009-.1284-.009-.1925-.009-.0642-.009-.1284-.0183-.1834-.2475-1.65-1.641-2.9243-3.3369-2.9794h-.1833c-.0642 0-.1192 0-.1834.0092a3.5512 3.5512 0 0 0-1.3934.3942c.2567.5592.4034 1.1735.4309 1.8152 0 .0641.009.1283.009.1925v.055c0 .0825 0 .165-.009.2475-.0733 1.2192-.596 2.3102-1.4026 3.126a3.5036 3.5036 0 0 0 2.6127 1.1643c.8892 0 1.705-.3392 2.3284-.8892.0458-.0459.0917-.0825.1376-.1284.0458-.0458.0917-.0916.1283-.1375.5684-.6234.9076-1.4484.9076-2.356a.563.563 0 0 1-.0183-.1375zM7.8656 16.5057c-.0367-.055-.0642-.11-.1008-.165a4.9471 4.9471 0 0 1-.5409-1.3934c-.1192-.0275-.2383-.0367-.3575-.0367h-.0367c-.0642 0-.1192.0092-.1834.0092-.0642.0092-.1191.0184-.1833.0367-.5225.1192-.9534.4767-1.1826.9442-.0275.055-.055.11-.0733.1742-.0183.055-.0367.1192-.055.1742a1.681 1.681 0 0 0-.055.4308c0 .3392.1009.66.2659.926.0367.055.0642.1008.11.1558.0367.0458.0733.0917.1192.1375a1.764 1.764 0 0 0 1.2834.55c.7517 0 1.3934-.4675 1.6501-1.1275-.1925-.2017-.3759-.4126-.5317-.651a.5052.5052 0 0 1-.1284-.165zm8.6356-2.2643c.009-.0733.009-.1558.009-.2383v-.1192c0-.6509-.1375-1.2651-.385-1.8243l-.0825-.165-.0825-.165c-.4034-.7334-.9992-1.3476-1.7235-1.7602-.055-.0275-.11-.0641-.165-.0916l-.165-.0825c-.5592-.2659-1.1734-.4126-1.8243-.4309h-.2292c-.0825 0-.1558.0092-.2291.0092a4.3878 4.3878 0 0 0-1.9618.6325c-.055.0367-.11.0642-.1559.1009-.055.0366-.1008.0733-.1558.11-.3025.22-.5776.4675-.816.7517-.0366.0458-.0824.0916-.119.1467-.0368.0458-.0734.1008-.11.1466-.5318.7426-.8435 1.641-.8435 2.6219 0 .2567.0183.5134.0642.7517.009.0733.0275.1375.0367.2108.0183.0734.0367.1467.055.2292.11.4126.2842.7976.5042 1.1551.0367.055.0642.11.1008.1559.0367.055.0733.1008.11.1558.0826.1192.1742.2292.2659.33.055.055.1008.1192.1558.1742.0458.055.1009.1008.1559.1467.8067.7425 1.8885 1.2009 3.071 1.2009 1.1368 0 2.1819-.4217 2.9794-1.1184.0458-.0367.0917-.0825.1375-.1192.0458-.0458.0917-.0825.1375-.1283.66-.6876 1.1093-1.5768 1.2376-2.5669a7.8659 7.8659 0 0 0 .0275-.22z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOwncloudIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
