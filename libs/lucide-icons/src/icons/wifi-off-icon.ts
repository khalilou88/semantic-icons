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
  selector: 'svg[si-wifi-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20h.01" />
    <svg:path d="M8.5 16.429a5 5 0 0 1 7 0" />
    <svg:path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
    <svg:path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
    <svg:path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
    <svg:path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
    <svg:path d="m2 2 20 20" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
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
