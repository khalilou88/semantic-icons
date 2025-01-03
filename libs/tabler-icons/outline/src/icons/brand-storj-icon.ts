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
  selector: 'svg[si-brand-storj-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M4 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M20 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M20 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 3m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 21l-8 -4v-10l8 -4l8 4v10z" />
    <svg:path
      d="M9.1 15a2.1 2.1 0 0 1 -.648 -4.098c.282 -1.648 1.319 -2.902 3.048 -2.902c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19l-.202 .01h-5.8z"
    />
    <svg:path d="M4 7l4.323 2.702" />
    <svg:path d="M16.413 14.758l3.587 2.242" />
    <svg:path d="M4 17l3.529 -2.206" />
    <svg:path d="M14.609 10.37l5.391 -3.37" />
    <svg:path d="M12 3v5" />
    <svg:path d="M12 15v6" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandStorjIcon implements OnInit {
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
