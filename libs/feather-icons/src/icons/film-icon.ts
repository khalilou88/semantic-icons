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
  selector: 'svg[si-film-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></svg:rect>
    <svg:line x1="7" y1="2" x2="7" y2="22"></svg:line>
    <svg:line x1="17" y1="2" x2="17" y2="22"></svg:line>
    <svg:line x1="2" y1="12" x2="22" y2="12"></svg:line>
    <svg:line x1="2" y1="7" x2="7" y2="7"></svg:line>
    <svg:line x1="2" y1="17" x2="7" y2="17"></svg:line>
    <svg:line x1="17" y1="17" x2="22" y2="17"></svg:line>
    <svg:line x1="17" y1="7" x2="22" y2="7"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilmIcon implements OnInit {
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
