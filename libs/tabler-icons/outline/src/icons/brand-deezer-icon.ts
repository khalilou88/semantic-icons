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
  selector: 'svg[si-brand-deezer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M3 16.5h2v.5h-2z" />
    <svg:path d="M8 16.5h2.5v.5h-2.5z" />
    <svg:path d="M16 17h-2.5v-.5h2.5z" />
    <svg:path d="M21.5 17h-2.5v-.5h2.5z" />
    <svg:path d="M21.5 13h-2.5v.5h2.5z" />
    <svg:path d="M21.5 9.5h-2.5v.5h2.5z" />
    <svg:path d="M21.5 6h-2.5v.5h2.5z" />
    <svg:path d="M16 13h-2.5v.5h2.5z" />
    <svg:path d="M8 13.5h2.5v-.5h-2.5z" />
    <svg:path d="M8 9.5h2.5v.5h-2.5z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandDeezerIcon implements OnInit {
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
