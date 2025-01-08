import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sliders-vertical-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="4" x2="4" y1="21" y2="14" />
    <svg:line x1="4" x2="4" y1="10" y2="3" />
    <svg:line x1="12" x2="12" y1="21" y2="12" />
    <svg:line x1="12" x2="12" y1="8" y2="3" />
    <svg:line x1="20" x2="20" y1="21" y2="16" />
    <svg:line x1="20" x2="20" y1="12" y2="3" />
    <svg:line x1="2" x2="6" y1="14" y2="14" />
    <svg:line x1="10" x2="14" y1="8" y2="8" />
    <svg:line x1="18" x2="22" y1="16" y2="16" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSlidersVerticalIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

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
