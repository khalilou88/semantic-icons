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
  selector: 'svg[si-loader-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="12" y1="2" x2="12" y2="6"></svg:line>
    <svg:line x1="12" y1="18" x2="12" y2="22"></svg:line>
    <svg:line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></svg:line>
    <svg:line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></svg:line>
    <svg:line x1="2" y1="12" x2="6" y2="12"></svg:line>
    <svg:line x1="18" y1="12" x2="22" y2="12"></svg:line>
    <svg:line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></svg:line>
    <svg:line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLoaderIcon implements OnInit {
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
