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
  selector: 'svg[si-librewolf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LibreWolf</svg:title>
    <svg:path
      d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12A12 12 0 0 0 12 0m.0306 2.4174c2.539 0 4.7927.9097 6.619 2.6718.8799.849 1.47 1.654 1.9752 2.6953.6834 1.4085.96 2.6337.96 4.2503 0 2.1282-.6144 3.9841-1.891 5.7107-.3792.513-1.1202 1.2925-1.612 1.6955-1.3487 1.1057-3.068 1.8537-4.7739 2.0774-.5894.0772-1.982.0868-2.5232.0174v.0001c-1.681-.2156-3.2887-.8859-4.6919-1.9555-.4576-.3489-1.3163-1.213-1.6911-1.702-1.0497-1.3694-1.7025-2.9237-1.9179-4.5663-.0922-.7032-.0916-1.996.0011-2.6387.4635-3.213 2.4855-5.9688 5.389-7.3449 1.3505-.64 2.5868-.9111 4.1567-.9111m-.0315 1.4514c-1.4755-.0014-2.7693.3367-4.0497 1.0586-1.1657.6572-2.3708 1.8637-3.0308 3.0342-.486.862-.8417 1.8852-.9806 2.82-.091.613-.0929 1.8301-.0036 2.417.1786 1.1746.6241 2.3354 1.27 3.3091.3527.5317.3416.5259.6528.3479.5566-.3184.7018-.4726 1.005-1.0666.3546-.6946.7336-1.3016 1.0762-1.7232.3953-.4867.4496-.5732.648-1.0327.0997-.2312.2788-.5708.3978-.7546l.2165-.3341-.28-.2753c-.372-.3655-.6814-.7802-.7395-.991-.0595-.2152.0108-.3353.2902-.4967.2825-.1632.4845-.21 1.2396-.2877.3677-.0377.7668-.1069.8925-.1547.125-.0475.4988-.251.8305-.452.9577-.5807 1.0388-.6107 1.613-.5983.485.0106.4859.0103.7734-.1635.6026-.3642 1.4681-1.0215 2.607-1.9797.2183-.1838.4286-.328.4674-.3206.161.031.457.757.5019 1.2315.0272.2878-.0285.5725-.1992 1.018-.0466.1215-.068.2375-.0477.2577.0489.0486.2165-.1607.2165-.2703 0-.1397.0924-.1557.2182-.0377.0915.0859.1705.1105.3545.1105.201 0 .2507.0186.329.1232.1332.1775.1644.6616.0625.9682-.099.2983-.3986.6423-.6704.77-.2431.1143-.7354.5951-.9658.9432-.0882.1332-.2536.411-.3675.6172-.114.2063-.305.518-.4246.6925-.2354.3436-.437.823-.6316 1.5017-.1143.3987-.1238.5025-.1285 1.3918-.0057 1.0742-.0613 1.3378-.3518 1.6686-.3301.376-.6596 1.2018-.6873 1.7225-.0175.3286-.0682.649-.1401.8862-.0317.1045.0275.1032.38-.0079 1.027-.3237 1.8638-.7588 2.6718-1.3889.4296-.335 1.1722-1.0847 1.4835-1.4978.8445-1.1202 1.419-2.5235 1.5881-3.8785.0814-.6526.0342-2.0332-.0901-2.6325-.3293-1.5875-1.039-2.9284-2.1566-4.0759-.6968-.7154-1.3311-1.187-2.1473-1.5961-1.2384-.621-2.2994-.8718-3.6932-.8733m1.516 5.314-.6964.0976-.433.5544.6966-.0978z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibrewolfIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
