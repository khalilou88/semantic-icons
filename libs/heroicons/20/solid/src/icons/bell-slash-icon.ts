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
  selector: 'svg[si-bell-slash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 8c0-.26.017-.517.049-.77l7.722 7.723a33.56 33.56 0 0 1-3.722-.01 2 2 0 0 0 3.862.15l1.134 1.134a3.5 3.5 0 0 1-6.53-1.409 32.91 32.91 0 0 1-3.257-.508.75.75 0 0 1-.515-1.076A11.448 11.448 0 0 0 4 8ZM17.266 13.9a.756.756 0 0 1-.068.116L6.389 3.207A6 6 0 0 1 16 8c.001 1.887.455 3.665 1.258 5.234a.75.75 0 0 1 .01.666ZM3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06L3.28 2.22Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBellSlashIcon implements OnInit {
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