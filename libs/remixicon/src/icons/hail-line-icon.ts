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
  selector: 'svg[si-hail-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 17.4185C3.06817 16.2317 1 13.3574 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.2208 4.2066 14.1599 6 15.1973V17.4185ZM10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15C12 16.1046 11.1046 17 10 17ZM15 20C13.8954 20 13 19.1046 13 18C13 16.8954 13.8954 16 15 16C16.1046 16 17 16.8954 17 18C17 19.1046 16.1046 20 15 20ZM10 23C8.89543 23 8 22.1046 8 21C8 19.8954 8.89543 19 10 19C11.1046 19 12 19.8954 12 21C12 22.1046 11.1046 23 10 23Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHailLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
