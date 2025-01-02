import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-monitor-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 17v4" />
    <svg:path d="m15.2 4.9-.9-.4" />
    <svg:path d="m15.2 7.1-.9.4" />
    <svg:path d="m16.9 3.2-.4-.9" />
    <svg:path d="m16.9 8.8-.4.9" />
    <svg:path d="m19.5 2.3-.4.9" />
    <svg:path d="m19.5 9.7-.4-.9" />
    <svg:path d="m21.7 4.5-.9.4" />
    <svg:path d="m21.7 7.5-.9-.4" />
    <svg:path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
    <svg:path d="M8 21h8" />
    <circle cx="18" cy="6" r="3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMonitorCogIcon implements OnInit {
  private readonly elementRef = Inject(ElementRef);
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
