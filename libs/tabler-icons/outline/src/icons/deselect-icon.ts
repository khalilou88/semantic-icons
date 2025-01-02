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
  selector: 'svg[si-deselect-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <svg:path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
    <svg:path d="M12 20v.01" />
    <svg:path d="M16 20v.01" />
    <svg:path d="M8 20v.01" />
    <svg:path d="M4 20v.01" />
    <svg:path d="M4 16v.01" />
    <svg:path d="M4 12v.01" />
    <svg:path d="M4 8v.01" />
    <svg:path d="M8 4v.01" />
    <svg:path d="M12 4v.01" />
    <svg:path d="M16 4v.01" />
    <svg:path d="M20 4v.01" />
    <svg:path d="M20 8v.01" />
    <svg:path d="M20 12v.01" />
    <svg:path d="M20 16v.01" />
    <svg:path d="M3 3l18 18" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDeselectIcon implements OnInit {
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
