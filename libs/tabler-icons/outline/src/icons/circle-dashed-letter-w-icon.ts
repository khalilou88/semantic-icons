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
  selector: 'svg[si-circle-dashed-letter-w-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M9 8l1 8l2 -5l2 5l1 -8" />
    <svg:path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
    <svg:path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
    <svg:path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <svg:path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
    <svg:path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
    <svg:path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
    <svg:path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
    <svg:path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCircleDashedLetterWIcon implements OnInit {
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
