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
  selector: 'svg[si-tesco-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tesco</svg:title>
    <svg:path
      d="M11.621 8.7913c-1.0182 0-2.0126.3081-2.0126 1.3264 0 1.7523 3.0784.8285 3.0784 1.8941 0 .3552-.5446.4976-.9709.4976-.7814 0-1.3499-.1186-2.0366-.5212v.8764c.521.1657 1.208.2602 1.9894.2602 1.0656 0 2.0602-.2841 2.0602-1.3024 0-1.847-3.0787-1.0182-3.0787-1.9181 0-.3552.4974-.4972.9236-.4972.7341 0 1.5155.2131 1.9418.6157v-.9473h-.0473c-.5446-.1657-1.3026-.2842-1.8472-.2842zm9.7329 0c-1.6103.0237-2.7233.9236-2.7233 2.226 0 1.255 1.0184 2.1075 2.5103 2.1075 1.5865 0 2.6996-.8996 2.6996-2.202 0-1.2787-.9948-2.1315-2.4866-2.1315zm-4.31.024c-1.847 0-3.0547.8758-3.0547 2.2256 0 1.2314 1.1132 2.0603 2.7945 2.0603.5447 0 1.018-.071 1.5863-.213V11.846c-.4026.4262-.876.592-1.397.592-.9945 0-1.6578-.6154-1.6578-1.5153 0-.8762.7106-1.5157 1.6815-1.5157.5447 0 .9709.1893 1.3024.5208v-.9945c-.3552-.0947-.8052-.1181-1.2551-.1181zM.16 8.9334v.9945c.3552-.2605 1.0658-.3787 1.8472-.3787v2.6996c0 .4026-.0239.4971-.2133.7103h1.563c-.1658-.2132-.213-.3314-.213-.7103V9.5256h.0472c.6868 0 1.4917.1182 1.847.4023v-.9945zm5.3044 0c.1657.2131.1894.3318.1894.7107v2.6047c0 .4026-.0237.5208-.1894.7103h3.7654v-.971c-.521.379-1.492.3793-1.8945.3556h-.545v-1.113h.4028c.2842 0 .7576.0234 1.0418.1181v-.8287c-.2842.0947-.7813.1185-1.0418.1185h-.4027V9.5728h.5449c.4973 0 1.3496.095 1.6575.3791V8.9334zm15.7474.4973c.8288 0 1.3737.6869 1.3737 1.5394.0236.8288-.5212 1.5153-1.35 1.5153-.8525 0-1.397-.6865-1.397-1.5153 0-.8525.5445-1.5394 1.3733-1.5394zm-19.3703 4.689c-.4973 0-.8763.2602-1.0658.4496 0 0-.45.45-.7578.6158-.0237 0-.0237.0236 0 .0236h2.7945c.5446 0 .805-.1895 1.1366-.4736 0 0 .4736-.4497.8288-.5918.0236 0 .0236-.0236 0-.0236zm4.8068 0c-.4973 0-.876.2602-1.0418.4496 0 0-.45.45-.7579.6158-.0236 0-.0236.0236 0 .0236H7.643c.5447 0 .8051-.1895 1.1367-.4736 0 0 .4736-.4497.8051-.5918.0237 0 .0237-.0236 0-.0236zm4.7835 0c-.4736 0-.8523.2602-1.0418.4496 0 0-.45.45-.7578.6158-.0237 0-.0237.0236 0 .0236h2.794c.5447 0 .8056-.1895 1.1371-.4736 0 0 .4736-.4497.8051-.5918.0237 0 .0237-.0236 0-.0236zm4.8071 0c-.4736 0-.8523.2602-1.0417.4496 0 0-.45.45-.7579.6158-.0237 0-.0237.0236 0 .0236h2.7941c.5447 0 .8051-.1895 1.1367-.4736 0 0 .4736-.4497.805-.5918.0238 0 .0238-.0236 0-.0236zm4.8072 0c-.4736 0-.8523.2602-1.0654.4496 0 0-.45.45-.7579.6158-.0237 0-.0237.0236 0 .0236h2.8178c.5446 0 .805-.1895 1.1366-.4736 0 0 .4736-.4497.8051-.5918.0237 0 .0237-.0236 0-.0236z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTescoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
