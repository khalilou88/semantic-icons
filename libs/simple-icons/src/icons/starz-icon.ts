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
  selector: 'svg[si-starz-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>STARZ</svg:title>
    <svg:path
      d="M2.2695 9.2832C.3784 9.2832.131 10.4706.131 10.834c0 2.1989 2.9316 1.3955 2.9316 2.2363 0 .2073-.1641.4277-.7363.4277-.6317 0-.7598-.2895-.7598-.5097H0c.0054.4022.1675 1.7285 2.3262 1.7285 1.5989 0 2.287-.7516 2.287-1.7031 0-2.1804-2.996-1.3552-2.996-2.1797 0-.1628.1284-.4082.6308-.4082.5025 0 .631.2454.631.4082H4.369c0-.3917-.2084-1.5508-2.0996-1.5508zm2.2774.1465v1.4043h1.4199v3.7363h1.5488V10.834h1.4395V9.4297Zm5.6191 0L8.131 14.5703h1.6425l.1836-.5586h1.7989l.1855.5586h1.6406L11.547 9.4297Zm3.7422 0v5.1406h1.5488v-2.164l1.289 2.164h1.836l-1.3125-1.9023c.6997-.3145.9922-.9294.9922-1.5567h-.002c0-.928-.6126-1.6816-2.121-1.6816h-.002zm4.9297 0v1.4043h2.0371l-2.2246 3.7363h4.1816l.7793-1.4043h-2.4531l2.2227-3.7363Zm-3.3809 1.2656h.6817c.4166 0 .58.225.58.504 0 .2788-.1636.5058-.58.5058v-.002h-.6817zm-4.6015.6094.5586 1.6777h-1.1153zm12.836 2.7148c-.1708 0-.3087.1398-.3087.3106 0 .1707.1379.3086.3086.3086A.3082.3082 0 0 0 24 14.33c0-.1708-.1379-.3106-.3086-.3106zm-.0138.0606c.0042-.0002.0094 0 .0137 0 .1373 0 .248.1127.248.25a.2477.2477 0 0 1-.248.248c-.1372 0-.25-.1108-.25-.248 0-.133.105-.2433.2363-.25zm-.0937.084v.33h.0605v-.1289h.047l.0702.129h.0703l-.0781-.1368a.0987.0987 0 0 0 .0469-.0332.0949.0949 0 0 0 .0195-.0605c0-.059-.0416-.0996-.1055-.0996zm.0605.0625h.0645c.0314 0 .0488.013.0488.039 0 .026-.0174.039-.0488.039h-.0645z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStarzIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '082125');
  }
}
