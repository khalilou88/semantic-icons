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
  selector: 'svg[si-insert-link-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.96 11.38C4.24 9.91 5.62 8.9 7.12 8.9h2.93c.52 0 .95-.43.95-.95S10.57 7 10.05 7H7.22c-2.61 0-4.94 1.91-5.19 4.51A4.995 4.995 0 0 0 7 17h3.05c.52 0 .95-.43.95-.95s-.43-.95-.95-.95H7a3.11 3.11 0 0 1-3.04-3.72zM9 13h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1zm7.78-6h-2.83c-.52 0-.95.43-.95.95s.43.95.95.95h2.93c1.5 0 2.88 1.01 3.16 2.48A3.11 3.11 0 0 1 17 15.1h-3.05c-.52 0-.95.43-.95.95s.43.95.95.95H17c2.92 0 5.26-2.51 4.98-5.49-.25-2.6-2.59-4.51-5.2-4.51z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInsertLinkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
