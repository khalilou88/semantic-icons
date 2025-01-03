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
  selector: 'svg[si-gallery-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.14453 6.93457C8.24707 6.93457 7.51953 7.66211 7.51953 8.55957C7.51953 9.45703 8.24707 10.1846 9.14453 10.1846H9.15453C10.052 10.1846 10.7795 9.45703 10.7795 8.55957C10.7795 7.66211 10.052 6.93457 9.15453 6.93457H9.14453Z"
      fill="#323544"
    />
    <svg:path
      d="M3.75 5.5C3.75 4.25736 4.75736 3.25 6 3.25H19C20.2426 3.25 21.25 4.25736 21.25 5.5V18.5C21.25 19.7426 20.2426 20.75 19 20.75H6C4.75736 20.75 3.75 19.7426 3.75 18.5V5.5ZM6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5V15.5807L6.70103 13.6808C7.60463 12.4977 9.38749 12.5025 10.2847 13.6905L11.5002 15.3001C11.8508 15.7643 12.5734 15.6701 12.7931 15.1315L14.7708 10.2852C15.4381 8.65008 17.6428 8.3859 18.6774 9.81704L19.75 11.3006V5.5C19.75 5.08579 19.4142 4.75 19 4.75H6ZM5.25 18.5C5.25 18.9142 5.58579 19.25 6 19.25H19C19.4142 19.25 19.75 18.9142 19.75 18.5V13.8608L17.4618 10.6959C17.117 10.2188 16.3821 10.3069 16.1596 10.8519L14.1819 15.6983C13.5226 17.3139 11.3548 17.5966 10.3032 16.2041L9.08766 14.5945C8.7886 14.1985 8.19431 14.1969 7.89311 14.5913L5.40073 17.8546C5.35659 17.9124 5.3057 17.962 5.25 18.0031V18.5Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGalleryIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}