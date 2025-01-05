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
  selector: 'svg[si-optimism-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Optimism</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0M9.6094 8.705c.4623 0 .8778.0784 1.2441.2345.3663.15.6532.3773.8633.6835.2101.3002.3164.6598.3164 1.0801 0 .1261-.0149.2864-.045.4785a20.4 20.4 0 0 1-.3241 1.5586c-.2102.8227-.5735 1.4375-1.0899 1.8457-.5164.4023-1.2076.6036-2.0722.6036-.7146 0-1.2996-.1677-1.756-.504q-.6755-.5133-.6757-1.459 0-.198.045-.4863c.078-.4323.1898-.9521.334-1.5586.4082-1.6512 1.4608-2.4765 3.16-2.4765m4.1699.09h2.3965q.9999-.0001 1.6035.414c.4083.2762.6113.6749.6113 1.1973 0 .15-.0186.3066-.0547.4687-.15.6905-.4518 1.201-.9082 1.5313-.4503.3302-1.0689.496-1.8554.496h-1.2168l-.414 1.9727a.26.26 0 0 1-.0997.1621c-.054.042-.11.0625-.17.0625h-1.2245c-.066 0-.1183-.0204-.1543-.0625-.03-.048-.0394-.102-.0274-.1621l1.2442-5.8555a.256.256 0 0 1 .0976-.162c.054-.042.1118-.0626.1719-.0626m-4.2871 1.207c-.3363 0-.6231.0987-.8633.2968-.2341.1982-.4019.5019-.5039.9102-.1081.4023-.2162.8941-.3242 1.4765a1.93 1.93 0 0 0-.0371.379c0 .5524.2888.828.8652.828q.5043.0002.8555-.2968c.2402-.1981.4116-.5019.5136-.9102.1381-.5644.2425-1.0562.3145-1.4765a2.1 2.1 0 0 0 .0371-.3887c0-.5464-.287-.8183-.8574-.8183m5.4492.0449-.3418 1.6113h1.0352c.2521 0 .472-.069.6582-.207.1921-.1381.3169-.3356.377-.5938.018-.102.0273-.1915.0273-.2695 0-.1742-.0503-.3064-.1524-.3965-.102-.096-.2772-.1445-.5234-.1445z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOptimismIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF0420');
  }
}
