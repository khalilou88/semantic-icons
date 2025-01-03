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
  selector: 'svg[si-gemini-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.9956 12.0175C16.6323 12.3419 12.3399 16.6343 12.0156 21.9975H11.9756C11.6556 16.6343 7.36325 12.3419 2 12.0175V11.9775C7.36325 11.6576 11.6556 7.36521 11.98 2.00195H12.02C12.3444 7.36521 16.6367 11.6576 22 11.982V12.0175H21.9956Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGeminiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
