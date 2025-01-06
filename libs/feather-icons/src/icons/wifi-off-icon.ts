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
  selector: 'svg[si-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="1" y1="1" x2="23" y2="23"></svg:line>
    <svg:path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></svg:path>
    <svg:path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></svg:path>
    <svg:path d="M10.71 5.05A16 16 0 0 1 22.58 9"></svg:path>
    <svg:path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></svg:path>
    <svg:path d="M8.53 16.11a6 6 0 0 1 6.95 0"></svg:path>
    <svg:line x1="12" y1="20" x2="12.01" y2="20"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiOffIcon implements OnInit {
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
