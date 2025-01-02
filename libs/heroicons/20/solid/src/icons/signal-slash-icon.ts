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
  selector: 'svg[si-signal-slash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.22 2.22a.75.75 0 0 1 1.06 0l6.783 6.782a1 1 0 0 1 .935.935l6.782 6.783a.75.75 0 1 1-1.06 1.06l-6.783-6.782a1 1 0 0 1-.935-.935L2.22 3.28a.75.75 0 0 1 0-1.06ZM3.636 16.364a9.004 9.004 0 0 1-1.39-10.936L3.349 6.53a7.503 7.503 0 0 0 1.348 8.773.75.75 0 0 1-1.061 1.061ZM6.464 13.536a5 5 0 0 1-1.213-5.103l1.262 1.262a3.493 3.493 0 0 0 1.012 2.78.75.75 0 0 1-1.06 1.06ZM16.364 3.636a9.004 9.004 0 0 1 1.39 10.937l-1.103-1.104a7.503 7.503 0 0 0-1.348-8.772.75.75 0 1 1 1.061-1.061ZM13.536 6.464a5 5 0 0 1 1.213 5.103l-1.262-1.262a3.493 3.493 0 0 0-1.012-2.78.75.75 0 0 1 1.06-1.06Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSignalSlashIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'aria-hidden', 'true');
    this.render.setAttribute(svg, 'data-slot', 'icon');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 20 20');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
