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
  selector: 'svg[si-table-rows-split-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 10h2" />
    <svg:path d="M15 22v-8" />
    <svg:path d="M15 2v4" />
    <svg:path d="M2 10h2" />
    <svg:path d="M20 10h2" />
    <svg:path d="M3 19h18" />
    <svg:path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
    <svg:path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
    <svg:path d="M8 10h2" />
    <svg:path d="M9 22v-8" />
    <svg:path d="M9 2v4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTableRowsSplitIcon implements OnInit {
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
