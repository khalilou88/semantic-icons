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
  selector: 'svg[si-text-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M5 3a2 2 0 0 0-2 2" />
    <svg:path d="M19 3a2 2 0 0 1 2 2" />
    <svg:path d="M21 19a2 2 0 0 1-2 2" />
    <svg:path d="M5 21a2 2 0 0 1-2-2" />
    <svg:path d="M9 3h1" />
    <svg:path d="M9 21h1" />
    <svg:path d="M14 3h1" />
    <svg:path d="M14 21h1" />
    <svg:path d="M3 9v1" />
    <svg:path d="M21 9v1" />
    <svg:path d="M3 14v1" />
    <svg:path d="M21 14v1" />
    <line x1="7" x2="15" y1="8" y2="8" />
    <line x1="7" x2="17" y1="12" y2="12" />
    <line x1="7" x2="13" y1="16" y2="16" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTextSelectIcon implements OnInit {
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