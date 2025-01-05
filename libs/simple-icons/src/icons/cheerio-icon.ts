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
  selector: 'svg[si-cheerio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cheerio</svg:title>
    <svg:path
      d="M16.1396 15.6223c.5937.4442 1.2036.9005 1.8095 1.3559-.4142.4767-.9279.8995-1.5834 1.3068-.4922.3049-1.0297.5478-1.6393.7412-.4883.1511-.9723.2552-1.4432.31-.4298.0538-.8798.0393-1.2209.0207-1.0909-.065-2.1521-.3797-3.1536-.9348-.8151-.4534-1.5369-1.0821-2.1457-1.8689-.5418-.6991-.9378-1.4468-1.1771-2.2231-.1847-.596-.2658-1.2074-.3207-1.7266-.0781-.7424-.0024-1.5307.2386-2.4816.2009-.7987.5396-1.5323 1.0083-2.1829.7754-1.0903 1.7401-1.9113 2.8675-2.4402.7683-.3608 1.5487-.5869 2.3216-.6722a6.046 6.046 0 0 1 .6885-.0377c.3624 0 .7611.0282 1.2272.0855a6.3308 6.3308 0 0 1 1.8739.5194c.9649.4381 1.8045 1.0561 2.4988 1.839-1.0573.8162-2.1255 1.62-3.1697 2.4034-.5109-.4584-1.1614-.7463-1.8772-.8238-.8941-.0967-1.7878.1553-2.4512.691-.7267.5849-1.1696 1.4197-1.247 2.3508-.0771.927.2192 1.8179.8339 2.5087.6372.7168 1.4774 1.1031 2.434 1.1172.8764.0045 1.6485-.2809 2.2975-.8534.4443.3332.8874.6646 1.3297.9956zM24 1.8v20.4c0 .9941-.8059 1.8-1.8 1.8H1.8C.8059 24 0 23.1941 0 22.2V1.8C0 .8059.8059 0 1.8 0h20.4c.9941 0 1.8.8059 1.8 1.8zm-4.5418 14.9626-.4192-.3159a835.8403 835.8403 0 0 0-2.2524-1.6891c-.5658-.4233-1.133-.8477-1.7023-1.2753l-.3982-.2991-.3303.3728c-.5032.568-1.0979.8442-1.8134.8442l-.0185-.0001c-.6504-.0096-1.2016-.2635-1.6385-.755-.4164-.4679-.617-1.0721-.5646-1.7014.0526-.6335.3538-1.2013.8485-1.5995.4423-.3573 1.0467-.5242 1.6572-.4582.6104.066 1.1474.3529 1.5122.8078l.3271.4078.4182-.3137c1.2997-.9748 2.6437-1.9828 3.9674-3.0117l.184-.1431.0221-.2321c.0323-.3382-.1604-.5447-.2428-.6329-.007-.0076-.0144-.015-.0201-.0219l-.009-.0111c-.8302-1.0012-1.8558-1.7835-3.0489-2.3253a7.4076 7.4076 0 0 0-2.191-.6081c-.5812-.0714-1.3528-.1413-2.165-.0487-.8893.0981-1.7844.3565-2.6601.7679C7.623 5.13 6.5165 6.0693 5.6338 7.3104c-.5468.7591-.943 1.6163-1.1773 2.547-.2731 1.0775-.3575 1.986-.2656 2.8594.0605.5715.1509 1.2482.363 1.9323.2775.9002.7334 1.7634 1.355 2.5654.6985.9027 1.5311 1.6266 2.4753 2.1519 1.1445.6343 2.3603.9939 3.6166 1.0689a11.33 11.33 0 0 0 .6128.0185c.2542 0 .5268-.0114.7987-.0454.5321-.0619 1.0816-.1798 1.6369-.3517.6994-.2219 1.3161-.5011 1.8857-.854.9521-.5914 1.6781-1.2496 2.2194-2.0121l.3039-.428z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCheerioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#E88C1F');
  }
}
