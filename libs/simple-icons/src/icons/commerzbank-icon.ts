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
  selector: 'svg[si-commerzbank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Commerzbank</svg:title>
    <svg:path
      d="M6.277 1.538a.018.018 0 0 0-.012.007l-4.74 8.21-1.398 2.418c.446.774.794 1.353 1.22 2.09.671 1.164 1.548 1.597 3.13 1.889a12.9 12.9 0 0 1 .697-1.392l2.783-4.824 2.786-4.826c.404-.702 1.296-2.143 2.57-2.965-.04.025-.07.059-.109.085.07-.047.137-.094.209-.136.46-.278.98-.467 1.413-.515.339-.038 1.465-.041 2.74-.041zm11.59.505c-1.048-.008-1.462.007-2.545.008-1.39 0-2.381.887-3.083 1.773.372.493.68.971.863 1.288a13357.605 13357.605 0 0 0 5.571 9.648c.404.7 1.209 2.196 1.284 3.71.029.574-.079 1.165-.265 1.592-.131.3-.652 1.207-1.256 2.253L24 12.678v-.008a.013.013 0 0 0-.002-.005zM.001 8.163l.095 4.946L0 8.163zm.093 4.946 1.132 1.964 4.264 7.384a.015.015 0 0 0 .012.005h12.265c.446-.779.664-1.147 1.311-2.282.709-1.242.278-2.681-.037-3.472-.618.076-1.18.093-1.547.093H6.35c-.809 0-2.505-.05-3.853-.741-.513-.263-.972-.65-1.248-1.027-.176-.238-.625-1.003-1.156-1.924z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCommerzbankIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFCC33');
  }
}
