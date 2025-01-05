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
  selector: 'svg[si-semanticweb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Semantic Web</svg:title>
    <svg:path
      d="M21.602 0s-1.524 5.809-8.516 2.658c-.776-.35-.954-.444-.982-.469L2.074 6.301l10.043 4.896s.776-.326 2.026-.933C20.273 7.287 21.602 0 21.602 0zM1.59 8.486v10.448L10.947 24V13.242L1.59 8.486zm20.82 0l-9.357 4.756V24l9.357-5.066V8.486Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSemanticwebIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#005A9C');
  }
}
