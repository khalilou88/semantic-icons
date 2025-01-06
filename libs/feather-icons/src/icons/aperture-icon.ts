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
  selector: 'svg[si-aperture-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:line x1="14.31" y1="8" x2="20.05" y2="17.94"></svg:line>
    <svg:line x1="9.69" y1="8" x2="21.17" y2="8"></svg:line>
    <svg:line x1="7.38" y1="12" x2="13.12" y2="2.06"></svg:line>
    <svg:line x1="9.69" y1="16" x2="3.95" y2="6.06"></svg:line>
    <svg:line x1="14.31" y1="16" x2="2.83" y2="16"></svg:line>
    <svg:line x1="16.62" y1="12" x2="10.88" y2="21.94"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApertureIcon implements OnInit {
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
