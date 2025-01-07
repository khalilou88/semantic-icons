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
  selector: 'svg[si-traffic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V3H7v2H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V21h10v-2.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrafficIcon implements OnInit {
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
