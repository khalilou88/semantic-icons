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
  selector: 'svg[si-layout-3-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 10V21H4C3.44772 21 3 20.5523 3 20V10H8ZM21 10V20C21 20.5523 20.5523 21 20 21H10V10H21ZM20 3C20.5523 3 21 3.44772 21 4V8H3V4C3 3.44772 3.44772 3 4 3H20Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLayout3FillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
