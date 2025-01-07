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
  selector: 'svg[si-tapas-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-7.5 8.5A2.5 2.5 0 0 1 10 14H8v9H6v-9H4a2.5 2.5 0 0 1 0-5h2V8H4a2.5 2.5 0 0 1 0-5h2V1h2v2h2a2.5 2.5 0 0 1 0 5H8v1h2a2.5 2.5 0 0 1 2.5 2.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTapasIcon implements OnInit {
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
