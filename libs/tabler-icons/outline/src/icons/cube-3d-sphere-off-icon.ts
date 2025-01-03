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
  selector: 'svg[si-cube-3d-sphere-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M6 17.6l-2 -1.1v-2.5" />
    <svg:path d="M4 10v-2.5l2 -1.1" />
    <svg:path d="M10 4.1l2 -1.1l2 1.1" />
    <svg:path d="M18 6.4l2 1.1v2.5" />
    <svg:path d="M20 14v2" />
    <svg:path d="M14 19.9l-2 1.1l-2 -1.1" />
    <svg:path d="M18 8.6l2 -1.1" />
    <svg:path d="M12 12v2.5" />
    <svg:path d="M12 18.5v2.5" />
    <svg:path d="M12 12l-2 -1.12" />
    <svg:path d="M6 8.6l-2 -1.1" />
    <svg:path d="M3 3l18 18" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCube3dSphereOffIcon implements OnInit {
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
