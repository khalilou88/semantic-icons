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
  selector: 'svg[si-password-user-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 17v4" />
    <svg:path d="M10 20l4 -2" />
    <svg:path d="M10 18l4 2" />
    <svg:path d="M5 17v4" />
    <svg:path d="M3 20l4 -2" />
    <svg:path d="M3 18l4 2" />
    <svg:path d="M19 17v4" />
    <svg:path d="M17 20l4 -2" />
    <svg:path d="M17 18l4 2" />
    <svg:path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <svg:path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPasswordUserIcon implements OnInit {
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
