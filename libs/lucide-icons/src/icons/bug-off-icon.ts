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
  selector: 'svg[si-bug-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
    <svg:path d="M14.12 3.88 16 2" />
    <svg:path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
    <svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
    <svg:path d="M12 20v-8" />
    <svg:path d="M6 13H2" />
    <svg:path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBugOffIcon implements OnInit {
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
