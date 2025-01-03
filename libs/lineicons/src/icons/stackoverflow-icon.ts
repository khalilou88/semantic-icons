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
  selector: 'svg[si-stackoverflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.8728 20.2264H5.39283V14.8732H3.55469V22H19.6142V14.8732H17.8728V20.2264Z"
      fill="#323544"
    />
    <svg:path
      d="M15.1426 2L13.7182 3.05673L19.0211 10.2047L20.4455 9.14793L15.1426 2Z"
      fill="#323544"
    />
    <svg:path
      d="M11.8616 4.86859L10.7275 6.23233L17.5711 11.9233L18.7052 10.5595L11.8616 4.86859Z"
      fill="#323544"
    />
    <svg:path
      d="M16.0667 16.6468H7.1663V18.4205H16.0667V16.6468Z"
      fill="#323544"
    />
    <svg:path
      d="M17.2925 12.3578L9.26273 8.55249L8.48878 10.1971L16.5508 13.9701L17.2925 12.3578Z"
      fill="#323544"
    />
    <svg:path
      d="M16.4211 14.4539L7.71421 12.5835L7.29498 14.3571L16.0664 16.1953L16.4211 14.4539Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiStackoverflowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}