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
  selector: 'svg[si-edeka-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>EDEKA</svg:title>
    <svg:path
      d="M10.901 18.997h2.688v.699h-1.857v.297h1.857v.699h-1.857v.295h1.857v.698h-2.688zm-6.476 0h2.686v.699H5.253v.297h1.858v.699H5.253v.295h1.858v.698H4.425ZM17.996 19l-.92 2.685h.827l.182-.552h1.066l.172.552h.834L19.233 19Zm.617.593.319.91h-.635ZM14.076 19h.827v1.024L15.839 19h1.089l-1.055 1.144 1.144 1.541h-1.053l-.673-.914-.387.402v.512h-.828zm-6.459 0v2.685h1.59a1.344 1.344 0 0 0 0-2.685zm.827.71h.652a.6335.6335 0 1 1 0 1.267h-.65ZM4.432 2.318h15.136V6.32H9.104v1.563h10.463v4.004H9.104v1.56h10.463v4.004H4.432ZM2.116 0v24h19.768V0Zm.176.177h19.413v23.647H2.291Zm2.1364 18.8206h2.6852v.6988H5.2564v.2967h1.8572v.6989H5.2564v.2943h1.8572v.6988H4.4284Zm6.4758 0h2.6876v.6988h-1.857v.2967h1.857v.6989h-1.857v.2943h1.857v.6988h-2.6876zM17.998 19l-.9199 2.6855h.8281l.1817-.5527h1.0644l.172.5527h.8359l-.9239-2.6855zm.6172.5937.3184.9082h-.6348ZM14.078 19h.828v1.0243L15.8417 19h1.0889l-1.0554 1.144 1.144 1.5412H15.966l-.6725-.9142-.3877.402v.5122h-.828zM7.621 19v2.6855H9.209c.7395-.0023 1.3384-.6081 1.336-1.3476-.0025-.7347-.599-1.3355-1.336-1.3379Zm.8262.711h.6504c.3494 0 .6347.2814.6347.6308 0 .3494-.2853.6348-.6347.6348h-.6504ZM4.4345 2.317h15.1347v4.004H9.106v1.5627h10.463v4.0039H9.1062v1.5604h10.463v4.0039H4.4346Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEdekaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#1B66B3');
  }
}
