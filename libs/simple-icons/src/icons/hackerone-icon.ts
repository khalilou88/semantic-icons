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
  selector: 'svg[si-hackerone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>HackerOne</svg:title>
    <svg:path
      d="M7.207 0c-.4836 0-.8774.1018-1.1823.3002-.3044.2003-.4592.4627-.4592.7798v21.809c0 .2766.1581.5277.4752.7609.315.2335.7031.3501 1.1664.3501.4427 0 .8306-.1166 1.1678-.3501.3352-.231.5058-.4843.5058-.761V1.0815c0-.319-.1623-.5769-.4893-.7813C8.0644.1018 7.6702 0 7.207 0zm9.5234 8.662c-.4836 0-.8717.0981-1.1683.3007l-4.439 2.7822c-.1988.1861-.2841.4687-.2473.855.0342.3826.2108.747.5238 1.0907.3145.346.6662.5626 1.0684.6547.3963.0899.6973.041.8962-.143l1.7551-1.0951v9.7817c0 .2767.1522.5278.4607.761.3007.2335.6873.3501 1.1504.3501.463 0 .863-.1166 1.1983-.3501.3371-.2332.5058-.4843.5058-.761V9.7381c0-.3193-.165-.577-.4898-.7754-.3252-.2026-.7288-.3007-1.2143-.3007z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHackeroneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#494649');
  }
}
