import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-dotted-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M7.5 4.21l0 .01" />
    <svg:path d="M4.21 7.5l0 .01" />
    <svg:path d="M3 12l0 .01" />
    <svg:path d="M4.21 16.5l0 .01" />
    <svg:path d="M7.5 19.79l0 .01" />
    <svg:path d="M12 21l0 .01" />
    <svg:path d="M16.5 19.79l0 .01" />
    <svg:path d="M19.79 16.5l0 .01" />
    <svg:path d="M21 12l0 .01" />
    <svg:path d="M19.79 7.5l0 .01" />
    <svg:path d="M16.5 4.21l0 .01" />
    <svg:path d="M12 3l0 .01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCircleDottedIcon implements OnInit {
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
