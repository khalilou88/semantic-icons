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
  selector: 'svg[si-mosque-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.91 9h4.18C15.14 9 16 8.14 16 7.09c0-.64-.32-1.23-.85-1.59L12 3.4 8.85 5.5c-.53.36-.85.95-.85 1.59C8 8.14 8.86 9 9.91 9zM17 11H7v4H3v4h6v-2c0-1.65 1.35-3 3-3s3 1.35 3 3v2h6v-4h-4v-4z"
      opacity=".3"
    />
    <svg:path
      d="M22 4s-2 1.9-2 3c0 .74.4 1.38 1 1.72V13h-2v-2c0-.95-.66-1.74-1.55-1.94.34-.58.55-1.25.55-1.97 0-1.31-.65-2.53-1.74-3.25L12 1 7.74 3.84A3.887 3.887 0 0 0 6 7.09c0 .72.21 1.39.55 1.96C5.66 9.26 5 10.05 5 11v2H3V8.72c.6-.34 1-.98 1-1.72 0-1.1-2-3-2-3S0 5.9 0 7c0 .74.4 1.38 1 1.72V21h10v-4c0-.55.45-1 1-1s1 .45 1 1v4h10V8.72c.6-.35 1-.98 1-1.72 0-1.1-2-3-2-3zM8.85 5.5 12 3.4l3.15 2.1c.53.36.85.95.85 1.59C16 8.14 15.14 9 14.09 9H9.91C8.86 9 8 8.14 8 7.09c0-.64.32-1.23.85-1.59zM21 19h-6v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2H3v-4h4v-4h10v4h4v4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMosqueIcon implements OnInit {
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
