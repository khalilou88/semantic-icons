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
  selector: 'svg[si-message-circle-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
    <svg:path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
    <svg:path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
    <svg:path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
    <svg:path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
    <svg:path d="M3.5 17.5 2 22l4.5-1.5" />
    <svg:path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
    <svg:path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMessageCircleDashedIcon implements OnInit {
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
