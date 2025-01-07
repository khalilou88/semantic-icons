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
  selector: 'svg[si-3g-mobiledata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 8c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h3v2H4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1zm18 4v3c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6h5v-2h-1.5c-.55 0-1-.45-1-1s.45-1 1-1H20c.55 0 1 .45 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si3gMobiledataIcon implements OnInit {
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
