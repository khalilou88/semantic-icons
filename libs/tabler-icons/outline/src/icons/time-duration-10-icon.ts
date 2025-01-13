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
  selector: 'svg[si-time-duration-10-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M9 9v6" />
    <svg:path d="M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
    <svg:path d="M3 12v.01" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M12 21v.01" />
    <svg:path d="M7.5 4.2v.01" />
    <svg:path d="M16.5 19.8v.01" />
    <svg:path d="M7.5 19.8v.01" />
    <svg:path d="M4.2 16.5v.01" />
    <svg:path d="M19.8 16.5v.01" />
    <svg:path d="M4.2 7.5v.01" />
    <svg:path d="M19.81 7.527a8.994 8.994 0 0 0 -7.81 -4.527" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTimeDuration10Icon implements OnInit {
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
