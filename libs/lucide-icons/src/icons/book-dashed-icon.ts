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
  selector: 'svg[si-book-dashed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 17h1.5" />
    <svg:path d="M12 22h1.5" />
    <svg:path d="M12 2h1.5" />
    <svg:path d="M17.5 22H19a1 1 0 0 0 1-1" />
    <svg:path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
    <svg:path d="M20 14v3h-2.5" />
    <svg:path d="M20 8.5V10" />
    <svg:path d="M4 10V8.5" />
    <svg:path d="M4 19.5V14" />
    <svg:path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
    <svg:path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBookDashedIcon implements OnInit {
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
