import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-calculator-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" />
    <svg:line x1="8" x2="16" y1="6" y2="6" />
    <svg:line x1="16" x2="16" y1="14" y2="18" />
    <svg:path d="M16 10h.01" />
    <svg:path d="M12 10h.01" />
    <svg:path d="M8 10h.01" />
    <svg:path d="M12 14h.01" />
    <svg:path d="M8 14h.01" />
    <svg:path d="M12 18h.01" />
    <svg:path d="M8 18h.01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCalculatorIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
