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
  selector: 'svg[si-sun-wind-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
    <svg:path d="M2 12h1" />
    <svg:path d="M11 3v1" />
    <svg:path d="M11 20v1" />
    <svg:path d="M4.6 5.6l.7 .7" />
    <svg:path d="M17.4 5.6l-.7 .7" />
    <svg:path d="M5.3 17.7l-.7 .7" />
    <svg:path d="M15 13h5a2 2 0 1 0 0 -4" />
    <svg:path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunWindIcon implements OnInit {
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
