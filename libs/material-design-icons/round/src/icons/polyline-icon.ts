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
  selector: 'svg[si-polyline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.04 6.85 7.3 10H4.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.14 0 .27-.02.39-.05L15 19.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.75 0-1.37.55-1.48 1.27L9 14.26V11.5c0-.12-.01-.24-.04-.36L11.7 8h2.8c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3c0 .12.01.24.04.35z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPolylineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
