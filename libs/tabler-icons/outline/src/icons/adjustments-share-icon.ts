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
  selector: 'svg[si-adjustments-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <svg:path d="M6 4v4" />
    <svg:path d="M6 12v8" />
    <svg:path d="M13.387 14.56a2 2 0 1 0 -.798 3.352" />
    <svg:path d="M12 4v10" />
    <svg:path d="M12 18v2" />
    <svg:path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <svg:path d="M18 4v1" />
    <svg:path d="M16 22l5 -5" />
    <svg:path d="M21 21.5v-4.5h-4.5" />
    <svg:path d="M18 9v4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAdjustmentsShareIcon implements OnInit {
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
