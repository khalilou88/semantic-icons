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
  selector: 'svg[si-qr-code-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="5" height="5" x="3" y="3" rx="1" />
    <svg:rect width="5" height="5" x="16" y="3" rx="1" />
    <svg:rect width="5" height="5" x="3" y="16" rx="1" />
    <svg:path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <svg:path d="M21 21v.01" />
    <svg:path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <svg:path d="M3 12h.01" />
    <svg:path d="M12 3h.01" />
    <svg:path d="M12 16v.01" />
    <svg:path d="M16 12h1" />
    <svg:path d="M21 12v.01" />
    <svg:path d="M12 21v-1" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQrCodeIcon implements OnInit {
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
