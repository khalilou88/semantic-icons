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
  selector: 'svg[si-filter-vintage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.7 12.4a6.06 6.06 0 0 0-.86-.4c.29-.11.58-.24.86-.4a6.012 6.012 0 0 0 3-5.19 6.007 6.007 0 0 0-6 0c-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55a6.008 6.008 0 0 0-6 0 5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4-.29.11-.58.24-.86.4a6.012 6.012 0 0 0-3 5.19 6.007 6.007 0 0 0 6 0c.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54a6.008 6.008 0 0 0 6 0 6.012 6.012 0 0 0-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilterVintageIcon implements OnInit {
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
