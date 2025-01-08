import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brain-circuit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
    />
    <svg:path d="M9 13a4.5 4.5 0 0 0 3-4" />
    <svg:path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <svg:path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <svg:path d="M6 18a4 4 0 0 1-1.967-.516" />
    <svg:path d="M12 13h4" />
    <svg:path d="M12 18h6a2 2 0 0 1 2 2v1" />
    <svg:path d="M12 8h8" />
    <svg:path d="M16 8V5a2 2 0 0 1 2-2" />
    <svg:circle cx="16" cy="13" r=".5" />
    <svg:circle cx="18" cy="3" r=".5" />
    <svg:circle cx="20" cy="21" r=".5" />
    <svg:circle cx="20" cy="8" r=".5" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrainCircuitIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

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
