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
  selector: 'svg[si-zoom-in-map-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 1 0-1.41 1.41L5.59 7H4c-.55 0-1 .45-1 1zm17-1h-1.59l2.38-2.38a.996.996 0 1 0-1.41-1.41L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM4 17h1.59l-2.38 2.38a.996.996 0 1 0 1.41 1.41L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38a.996.996 0 1 0 1.41-1.41L18.41 17H20c.55 0 1-.45 1-1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZoomInMapIcon implements OnInit {
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
