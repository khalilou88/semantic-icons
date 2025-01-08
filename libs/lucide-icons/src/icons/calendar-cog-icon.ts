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
  selector: 'svg[si-calendar-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m15.2 16.9-.9-.4" />
    <svg:path d="m15.2 19.1-.9.4" />
    <svg:path d="M16 2v4" />
    <svg:path d="m16.9 15.2-.4-.9" />
    <svg:path d="m16.9 20.8-.4.9" />
    <svg:path d="m19.5 14.3-.4.9" />
    <svg:path d="m19.5 21.7-.4-.9" />
    <svg:path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    <svg:path d="m21.7 16.5-.9.4" />
    <svg:path d="m21.7 19.5-.9-.4" />
    <svg:path d="M3 10h18" />
    <svg:path d="M8 2v4" />
    <svg:circle cx="18" cy="18" r="3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalendarCogIcon implements OnInit {
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
