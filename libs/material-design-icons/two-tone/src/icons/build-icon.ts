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
  selector: 'svg[si-build-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.92 8.28c.24-1.4-.16-2.89-1.24-3.96-.94-.95-2.2-1.39-3.44-1.32l3.09 3.09-4.24 4.24L3 7.24c-.07 1.24.37 2.49 1.31 3.44a4.472 4.472 0 0 0 3.83 1.25c.71-.1 1.4-.38 2-.82l9.46 9.46.88-.88-9.45-9.45c.47-.6.77-1.26.89-1.96z"
      opacity=".3"
    />
    <svg:path
      d="M22.61 18.97 13.54 9.9c.93-2.34.45-5.1-1.44-7C9.8.6 6.22.39 3.67 2.25L7.5 6.08 6.08 7.5 2.25 3.67a6.487 6.487 0 0 0 .65 8.42c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.02 0-1.41zm-3 1.6-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25-.95-.94-1.39-2.2-1.32-3.44l3.09 3.09 4.24-4.24L7.24 3c1.24-.07 2.49.37 3.44 1.31a4.469 4.469 0 0 1 1.24 3.96c-.12.7-.42 1.36-.88 1.95l9.45 9.45-.88.9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBuildIcon implements OnInit {
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
