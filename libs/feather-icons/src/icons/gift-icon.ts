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
  selector: 'svg[si-gift-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:polyline points="20 12 20 22 4 22 4 12"></svg:polyline>
    <svg:rect x="2" y="7" width="20" height="5"></svg:rect>
    <svg:line x1="12" y1="22" x2="12" y2="7"></svg:line>
    <svg:path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></svg:path>
    <svg:path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></svg:path>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGiftIcon implements OnInit {
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
