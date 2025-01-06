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
  selector: 'svg[si-cpu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="4" y="4" width="16" height="16" rx="2" ry="2"></svg:rect>
    <svg:rect x="9" y="9" width="6" height="6"></svg:rect>
    <svg:line x1="9" y1="1" x2="9" y2="4"></svg:line>
    <svg:line x1="15" y1="1" x2="15" y2="4"></svg:line>
    <svg:line x1="9" y1="20" x2="9" y2="23"></svg:line>
    <svg:line x1="15" y1="20" x2="15" y2="23"></svg:line>
    <svg:line x1="20" y1="9" x2="23" y2="9"></svg:line>
    <svg:line x1="20" y1="14" x2="23" y2="14"></svg:line>
    <svg:line x1="1" y1="9" x2="4" y2="9"></svg:line>
    <svg:line x1="1" y1="14" x2="4" y2="14"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCpuIcon implements OnInit {
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
