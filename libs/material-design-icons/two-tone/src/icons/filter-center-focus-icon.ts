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
  selector: 'svg[si-filter-center-focus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm7 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm7-6h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilterCenterFocusIcon implements OnInit {
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
