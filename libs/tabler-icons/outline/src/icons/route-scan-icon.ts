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
  selector: 'svg[si-route-scan-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <svg:path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <svg:path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <svg:path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <svg:path d="M7 12v-3h3" />
    <svg:path d="M14 9h3v3" />
    <svg:path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" />
    <svg:path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRouteScanIcon implements OnInit {
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
