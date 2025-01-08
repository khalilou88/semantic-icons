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
  selector: 'svg[si-image-upscale-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M16 3h5v5" />
    <svg:path d="M17 21h2a2 2 0 0 0 2-2" />
    <svg:path d="M21 12v3" />
    <svg:path d="m21 3-5 5" />
    <svg:path d="M3 7V5a2 2 0 0 1 2-2" />
    <svg:path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
    <svg:path d="M9 3h3" />
    <svg:rect x="3" y="11" width="10" height="10" rx="1" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImageUpscaleIcon implements OnInit {
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
