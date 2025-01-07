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
  selector: 'svg[si-1x-mobiledata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V9H5c-.55 0-1-.45-1-1s.45-1 1-1zm10.83 4.72 1.92-3.21A.997.997 0 0 0 16.9 7a.99.99 0 0 0-.86.49l-1.37 2.28-1.38-2.29c-.18-.3-.5-.48-.85-.48-.78 0-1.26.85-.86 1.51l1.92 3.21-2.26 3.77c-.4.67.08 1.51.86 1.51.35 0 .68-.18.86-.49l1.71-2.85 1.71 2.85c.18.3.51.49.86.49h.01c.78 0 1.26-.85.86-1.51l-2.28-3.77z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si1xMobiledataIcon implements OnInit {
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
