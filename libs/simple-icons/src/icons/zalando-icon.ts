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
  selector: 'svg[si-zalando-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Zalando</svg:title>
    <svg:path
      d="M5.27 24c-.88 0-1.36-.2-1.62-.36-.36-.21-1.02-.75-1.62-2.33A27.06 27.06 0 01.49 12c.02-3.66.59-6.76 1.54-9.3C2.63 1.1 3.29.56 3.65.35 3.91.21 4.39 0 5.27 0c.33 0 .72.03 1.18.1a26.1 26.1 0 018.7 3.3h.01a26.4 26.4 0 017.16 6.01c1.06 1.32 1.19 2.17 1.19 2.59 0 .42-.13 1.27-1.19 2.59a26.4 26.4 0 01-7.16 6h-.01a26.03 26.03 0 01-8.7 3.3c-.46.08-.85.11-1.18.11z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZalandoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF6900');
  }
}
