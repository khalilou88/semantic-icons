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
  selector: 'svg[si-swords-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <svg:line x1="13" x2="19" y1="19" y2="13" />
    <svg:line x1="16" x2="20" y1="16" y2="20" />
    <svg:line x1="19" x2="21" y1="21" y2="19" />
    <svg:polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
    <svg:line x1="5" x2="9" y1="14" y2="18" />
    <svg:line x1="7" x2="4" y1="17" y2="20" />
    <svg:line x1="3" x2="5" y1="19" y2="21" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSwordsIcon implements OnInit {
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
