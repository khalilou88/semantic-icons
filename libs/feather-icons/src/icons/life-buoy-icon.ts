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
  selector: 'svg[si-life-buoy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="10"></svg:circle>
    <svg:circle cx="12" cy="12" r="4"></svg:circle>
    <svg:line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></svg:line>
    <svg:line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></svg:line>
    <svg:line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></svg:line>
    <svg:line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></svg:line>
    <svg:line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLifeBuoyIcon implements OnInit {
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
