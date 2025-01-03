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
  selector: 'svg[si-printer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.1549 7.79099V6.6226C18.1549 6.01369 17.9081 5.43079 17.4709 5.007L16.3137 3.88538C15.894 3.4785 15.3323 3.25098 14.7477 3.25098H8.09473C6.85208 3.25098 5.84473 4.25834 5.84473 5.50098V7.79099H5.5C4.25736 7.79099 3.25 8.79836 3.25 10.041V13.9595C3.25 15.2021 4.25736 16.2095 5.5 16.2095H5.84375V18.5C5.84375 19.7426 6.85111 20.75 8.09375 20.75H15.9039C17.1465 20.75 18.1539 19.7426 18.1539 18.5V16.2095H18.4991C19.7417 16.2095 20.7491 15.2021 20.7491 13.9595V10.041C20.7491 8.79835 19.7417 7.79099 18.4991 7.79099H18.1549ZM8.09473 4.75098H14.7477C14.9426 4.75098 15.1298 4.82682 15.2697 4.96244L16.4269 6.08406C16.5726 6.22533 16.6549 6.41963 16.6549 6.6226V7.79099H7.34473V5.50098C7.34473 5.08676 7.68051 4.75098 8.09473 4.75098ZM5.84375 13.9463V14.7095H5.5C5.08579 14.7095 4.75 14.3737 4.75 13.9595V10.041C4.75 9.62678 5.08579 9.29099 5.5 9.29099H18.4991C18.9133 9.29099 19.2491 9.62678 19.2491 10.041V13.9595C19.2491 14.3737 18.9133 14.7095 18.4991 14.7095H18.1539V13.9463C18.1539 13.5321 17.8181 13.1963 17.4039 13.1963H6.59375C6.17954 13.1963 5.84375 13.5321 5.84375 13.9463ZM7.34375 14.6963H16.6539V18.5C16.6539 18.9142 16.3181 19.25 15.9039 19.25H8.09375C7.67954 19.25 7.34375 18.9142 7.34375 18.5V14.6963Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPrinterIcon implements OnInit {
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