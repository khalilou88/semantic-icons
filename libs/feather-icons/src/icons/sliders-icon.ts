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
  selector: 'svg[si-sliders-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="4" y1="21" x2="4" y2="14"></svg:line>
    <svg:line x1="4" y1="10" x2="4" y2="3"></svg:line>
    <svg:line x1="12" y1="21" x2="12" y2="12"></svg:line>
    <svg:line x1="12" y1="8" x2="12" y2="3"></svg:line>
    <svg:line x1="20" y1="21" x2="20" y2="16"></svg:line>
    <svg:line x1="20" y1="12" x2="20" y2="3"></svg:line>
    <svg:line x1="1" y1="14" x2="7" y2="14"></svg:line>
    <svg:line x1="9" y1="8" x2="15" y2="8"></svg:line>
    <svg:line x1="17" y1="16" x2="23" y2="16"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlidersIcon implements OnInit {
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
