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
  selector: 'svg[si-building-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <svg:path d="M9 22v-4h6v4" />
    <svg:path d="M8 6h.01" />
    <svg:path d="M16 6h.01" />
    <svg:path d="M12 6h.01" />
    <svg:path d="M12 10h.01" />
    <svg:path d="M12 14h.01" />
    <svg:path d="M16 10h.01" />
    <svg:path d="M16 14h.01" />
    <svg:path d="M8 10h.01" />
    <svg:path d="M8 14h.01" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBuildingIcon implements OnInit {
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
