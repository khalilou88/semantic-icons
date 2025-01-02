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
  selector: 'svg[si-sort-descending-small-big-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 15l-3 3l-3 -3" />
    <svg:path d="M7 6v12" />
    <svg:path
      d="M14 18.333c0 .369 .298 .667 .667 .667h2.666a.667 .667 0 0 0 .667 -.667v-2.666a.667 .667 0 0 0 -.667 -.667h-2.666a.667 .667 0 0 0 -.667 .667v2.666z"
    />
    <svg:path
      d="M14 10.833c0 .645 .522 1.167 1.167 1.167h4.666c.645 0 1.167 -.522 1.167 -1.167v-4.666c0 -.645 -.522 -1.167 -1.167 -1.167h-4.666c-.645 0 -1.167 .522 -1.167 1.167v4.666z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSortDescendingSmallBigIcon implements OnInit {
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
