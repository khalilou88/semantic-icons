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
  selector: 'svg[si-border-inner-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 12l16 0" />
    <svg:path d="M12 4l0 16" />
    <svg:path d="M4 4l0 .01" />
    <svg:path d="M8 4l0 .01" />
    <svg:path d="M16 4l0 .01" />
    <svg:path d="M20 4l0 .01" />
    <svg:path d="M4 8l0 .01" />
    <svg:path d="M20 8l0 .01" />
    <svg:path d="M4 16l0 .01" />
    <svg:path d="M20 16l0 .01" />
    <svg:path d="M4 20l0 .01" />
    <svg:path d="M8 20l0 .01" />
    <svg:path d="M16 20l0 .01" />
    <svg:path d="M20 20l0 .01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBorderInnerIcon implements OnInit {
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
