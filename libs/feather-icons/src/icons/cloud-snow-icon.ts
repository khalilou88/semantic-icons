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
  selector: 'svg[si-cloud-snow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></svg:path>
    <svg:line x1="8" y1="16" x2="8.01" y2="16"></svg:line>
    <svg:line x1="8" y1="20" x2="8.01" y2="20"></svg:line>
    <svg:line x1="12" y1="18" x2="12.01" y2="18"></svg:line>
    <svg:line x1="12" y1="22" x2="12.01" y2="22"></svg:line>
    <svg:line x1="16" y1="16" x2="16.01" y2="16"></svg:line>
    <svg:line x1="16" y1="20" x2="16.01" y2="20"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudSnowIcon implements OnInit {
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
