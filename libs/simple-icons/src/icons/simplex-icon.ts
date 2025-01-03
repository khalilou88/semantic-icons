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
  selector: 'svg[si-simplex-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>SimpleX</title>
    <svg:path
      d="m16.1 0-4.026 4.025L8.125.076 6.113 2.09l3.95 3.947-3.975 3.977L2.14 6.066.109 8.096l3.948 3.947L0 16.1l1.975 1.972 4.056-4.056 3.95 3.947 2.029-2.027-3.95-3.95 3.975-3.972 3.951 3.949-4.025 4.023v.002L9.947 18l-4.023 4.025L7.896 24l4.026-4.025 3.95 3.949 2.013-2.014-3.951-3.95 4.027-4.024 3.95 3.949 2.013-2.012-3.95-3.95L24 7.899l-1.975-1.972L18 9.949 14.049 6l4.025-4.025z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSimplexIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
