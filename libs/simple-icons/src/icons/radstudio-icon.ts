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
  selector: 'svg[si-radstudio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>RAD Studio</svg:title>
    <svg:path
      d="m12.1465 10.5337.7359 1.9534h-1.4716l.7357-1.9534zM4.8863 9.1476c-.4025.0044-.805.0008-1.2076.001-.019 0-.038.0018-.0614.003v2.0964c.0175.0016.0327.0043.048.0043.4142 0 .8285.0053 1.2426-.0018.6636-.0114 1.1412-.6091 1.0089-1.2605-.1016-.4999-.5468-.8477-1.0305-.8424zm19.0972 3.3603c-.0252.409-.0595.8184-.1126 1.2246-.0742.5675-.2022 1.1249-.3642 1.6746a11.8456 11.8456 0 0 1-.892 2.1936 11.9768 11.9768 0 0 1-2.4107 3.1587c-.9165.8593-1.9422 1.5593-3.0778 2.0967-.9867.467-2.0181.7934-3.095.9755-.511.0864-1.025.1418-1.5428.1622-.0501.002-.8557.0047-.8686.0043a12.0444 12.0444 0 0 1-1.4517-.1334 11.7612 11.7612 0 0 1-1.7943-.4175 11.9283 11.9283 0 0 1-2.2824-.9961 11.9821 11.9821 0 0 1-2.9132-2.3115c-.891-.9661-1.6055-2.0493-2.1417-3.2497-.5047-1.13-.824-2.3107-.9616-3.54a11.9165 11.9165 0 0 1-.0733-1.5264c.0072-.4321.0355-.8625.0876-1.2911.0655-.5373.1675-1.068.3055-1.5918.2367-.899.574-1.7584 1.011-2.5784.5443-1.0208 1.2235-1.943 2.0329-2.7688a11.8993 11.8993 0 0 1 1.1528-1.0307C5.633 1.745 6.7778 1.116 8.027.6766 8.5082.5073 8.9971.3635 9.4976.266c.381-.0742.7651-.1357 1.1504-.1821.3426-.0413.6883-.0613 1.0333-.0771.2358-.0108.4727-.001.709.004.4673.0101.9318.0555 1.3937.1244.5023.075.9982.1817 1.4873.32.8146.2305 1.596.5437 2.343.9409a11.9932 11.9932 0 0 1 3.016 2.2728 11.997 11.997 0 0 1 1.362 1.6917A11.9248 11.9248 0 0 1 23.4617 8.45c.2238.722.3769 1.4587.4604 2.2096.0684.6143.0996 1.231.0614 1.8483zM8.0166 14.8342c-.278-.6611-.5564-1.3221-.8356-1.9828-.0771-.1825-.174-.3545-.2985-.509-.0708-.0878-.1482-.1702-.2199-.252.0911-.1045.189-.2057.2746-.3164.7633-.9879.7042-2.4032-.1422-3.3218-.5123-.556-1.1557-.83-1.9078-.8393-.6724-.0084-1.3449-.0041-2.0173.0007-.1034.0007-.211.0215-.309.0553-.2904.1003-.483.3929-.483.7162-.0001 2.2343-.0003 4.4686.0011 6.703 0 .0772.0099.156.027.2315.0772.3384.3777.5771.7256.5814a.7718.7718 0 0 0 .7829-.774c.001-.7546.0002-1.5091.0003-2.2636v-.0725c.0228-.0016.0399-.0038.057-.0038.3733-.0003.7467-.0003 1.12.0001a.226.226 0 0 1 .0636.008c.1992.0601.3907.1383.5636.2559.1302.0886.2506.188.3171.337.0326.073.0643.1465.0955.2202.2588.6116.5169 1.2235.776 1.835a.7605.7605 0 0 0 1.013.4002c.386-.1724.561-.6172.396-1.0093zm7.3796.0008c-.1816-.4869-.3648-.9732-.5474-1.4598-.6555-1.7467-1.3107-3.4935-1.9666-5.2401-.1162-.3096-.3968-.5014-.7292-.5019-.3412-.0005-.6244.19-.7416.5022a7268.363 7268.363 0 0 0-2.509 6.6893c-.0359.0958-.0506.1994-.0644.2556.009.2562.0747.4425.222.5941.3843.3953 1.07.2492 1.2665-.2692.1677-.442.335-.8843.5002-1.3272.0175-.0471.0382-.0648.0908-.0647.823.002 1.646.002 2.469 0 .0522-.0001.0739.0162.0916.0638.1679.4503.3364.9004.5085 1.349.184.4797.8151.6317 1.199.2914.2523-.2235.3325-.5554.2106-.8825zm7.1412-3.6449c-.1495-1.092-.663-1.988-1.5232-2.679-.7198-.5782-1.5504-.867-2.4684-.8967-.4863-.0158-.9734-.0048-1.4602-.002a.733.733 0 0 0-.3641.0988c-.2612.1505-.3834.3844-.384.6798-.0023 1.1201-.001 2.2402-.001 3.3603 0 1.122-.0003 2.2442.0002 3.3662.0003.451.3323.7827.782.783.4399.0003.8797-.0002 1.3196.0002a4.0977 4.0977 0 0 0 1.3082-.212c.8541-.285 1.546-.7947 2.063-1.5313.6267-.8927.876-1.8864.728-2.9673zm-3.224-1.8945c-.4632-.1813-.9487-.1486-1.4309-.1439-.0015 0-.003.002-.0084.0059v5.2038c.0185.0014.0336.0036.0487.0036.1818.0001.3636.0019.5453-.0006.6462-.0086 1.2177-.2247 1.6953-.656.6695-.6046.9716-1.3701.8587-2.264-.1327-1.0498-.7238-1.7633-1.7088-2.1488z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRadstudioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
