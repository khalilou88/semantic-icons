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
  selector: 'svg[si-wb-shade-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 14.13c0 .23.09.46.26.63l4.98 4.98c.17.17.39.26.62.26.79 0 1.18-.95.62-1.51l-4.98-4.98c-.55-.56-1.5-.16-1.5.62zM15 20h2l-3-3v2c0 .55.45 1 1 1zM7.65 4.35l-4.8 4.8a.5.5 0 0 0 .36.85H4v9c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-9h.79c.45 0 .67-.54.35-.85l-4.79-4.8a.501.501 0 0 0-.7 0zM9 14H7v-4h2v4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWbShadeIcon implements OnInit {
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
