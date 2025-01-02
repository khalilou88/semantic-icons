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
  selector: 'svg[si-wizzair-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Wizz Air</title>
    <svg:path
      d="M17.6366 10.393h2.3183l-2.7457 3.5919h-2.3195zm-.1745-.351l-2.9186 3.8194c-.0699.0911-.0812.2063-.0302.308a.2977.2977 0 0 0 .2643.1658h2.6055l2.9424-3.8484a.2817.2817 0 0 0 .0277-.2926c-.0472-.0942-.1429-.1521-.2508-.1521zM9.127 8.1753a.0859.0859 0 0 1 .074-.0421h1.5203l.2184-1.2553a.0823.0823 0 0 1 .0823-.0664l1.423-.001c.0262 0 .0472.0078.0623.0248a.0904.0904 0 0 1 .0197.0682l-.1416.8122 6.69.0049c.0361 0 .062.0218.0747.0429.0078.0156.0183.0472-.0035.0768l-.6041.7888 4.9581-.0013a.0661.0661 0 0 1 .0577.0342.0535.0535 0 0 1-.0005.0583l-4.1208 5.3952c-.047.0588-.0448.2082-.0121.2718.034.0642.1515.156.2251.156l2.8984.0031a.0795.0795 0 0 1 .0623.0278.0813.0813 0 0 1 .0189.0658l-.2203 1.2607a.0823.0823 0 0 1-.0823.066H11.2994l-.1812-.001a.915.915 0 0 1 .0188.1934c0 .567-.4595 1.0269-1.0274 1.0269-.5677 0-1.0274-.4598-1.0274-1.027 0-.5673.4597-1.0266 1.0274-1.0266a1.03 1.03 0 0 1 .9012.5318l4.4943-5.8922c.0723-.1521.0362-.2066-.0027-.2964-.0288-.0677-.1372-.1373-.2556-.136h-3.146L11.297 13.93c-.0078.0361-.0423.0612-.0809.0612H9.7922a.0828.0828 0 0 1-.0628-.0283.0787.0787 0 0 1-.0184-.0658l.8732-4.9824-3.5515 6.9628a.1814.1814 0 0 1-.1578.092l-1.2097.006c-.0432 0-.0788-.0308-.0825-.0678l-.3336-5.0579-2.6239 5.0288a.182.182 0 0 1-.157.0914l-1.227-.0008c-.042 0-.0779-.031-.0814-.071L.36 8.2208a.0874.0874 0 0 1 .0208-.0639c.0148-.0148.0364-.0232.062-.0232H2.092c.045 0 .0828.0367.0828.0847l.2473 5.0088 2.4254-5.0503a.0824.0824 0 0 1 .0733-.0432l1.5034-.0064c.0415 0 .0788.0315.0812.0682l.2443 5.0474zm1.8249-1.7154a.3501.3501 0 0 0-.3447.2896l-.1812 1.0323H9.1472c-.1306 0-.2473.0704-.3137.1923l-1.8003 3.84-.1785-3.7122a.351.351 0 0 0-.3492-.3198h-1.637a.3528.3528 0 0 0-.3135.193l-1.851 3.8544-.1826-3.6977a.3504.3504 0 0 0-.35-.3497H.3506a.3533.3533 0 0 0-.2586.1092c-.0648.0712-.0977.1702-.0912.2732l.8163 7.8411a.35.35 0 0 0 .3487.3115l1.3534.0005a.4463.4463 0 0 0 .3956-.2378l2.067-3.9601.2549 3.8862a.3508.3508 0 0 0 .3479.3115l1.3434.0005a.448.448 0 0 0 .3962-.2397l2.512-4.925-.4865 2.7779a.3553.3553 0 0 0 .076.2872.3507.3507 0 0 0 .268.1245h1.5922c.1653 0 .306-.1151.343-.2812l.7659-4.3713H15.13l-4.1332 5.4092a1.3776 1.3776 0 0 0-.8842-.3198c-.7602 0-1.3807.6194-1.3807 1.3802 0 .7612.6205 1.3804 1.3807 1.3804.6984 0 1.2928-.5337 1.3731-1.2227l10.9119-.0005a.3472.3472 0 0 0 .3444-.2902l.2497-1.4206a.3526.3526 0 0 0-.0777-.2853.348.348 0 0 0-.2678-.1235l-2.8299-.0027 4.126-5.3993c.07-.1046.0765-.2308.0183-.3395a.3309.3309 0 0 0-.2942-.1788h-4.4148l.28-.3657c.0733-.1097.0806-.2432.0188-.3597-.0617-.1144-.1798-.1872-.3085-.1872h-6.44l.0883-.495a.3605.3605 0 0 0-.0815-.2884c-.0658-.0784-.1596-.1213-.265-.1213h-1.592Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWizzairIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
