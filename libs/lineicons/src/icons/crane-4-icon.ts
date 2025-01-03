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
  selector: 'svg[si-crane-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 5.5H10.75C10.75 4.25736 9.74264 3.25 8.5 3.25H7.5C6.25736 3.25 5.25 4.25736 5.25 5.5L4.75 5.5C3.50736 5.5 2.5 6.50736 2.5 7.75C2.5 8.99264 3.50736 10 4.75 10H5.25V18.75C5.25 19.1642 5.58579 19.5 6 19.5H10C10.4142 19.5 10.75 19.1642 10.75 18.75V10L17.7497 10L17.7499 12.8743C17.7499 13.3829 17.9755 13.7918 18.2231 14.0892C18.4679 14.3832 18.7708 14.6134 19.0231 14.7835C19.2748 14.9533 19.4378 15.2388 19.4378 15.5621C19.4378 16.0801 19.0179 16.5 18.4999 16.5C17.9819 16.5 17.562 16.0801 17.562 15.5621C17.562 15.1479 17.2262 14.8121 16.812 14.8121C16.3978 14.8121 16.062 15.1479 16.062 15.5621C16.062 16.9085 17.1535 18 18.4999 18C19.8463 18 20.9378 16.9085 20.9378 15.5621C20.9378 14.7192 20.5093 13.9765 19.8617 13.5399C19.6561 13.4012 19.4878 13.2639 19.3758 13.1293C19.2666 12.9983 19.2499 12.9179 19.2499 12.8742L19.2497 9.9863C20.3748 9.86206 21.25 8.90823 21.25 7.75C21.25 6.50736 20.2426 5.5 19 5.5ZM6.75 5.5C6.75 5.08579 7.08579 4.75 7.5 4.75H8.5C8.91421 4.75 9.25 5.08579 9.25 5.5H6.75ZM18.5339 8.5C18.5225 8.49949 18.5111 8.49924 18.4997 8.49924C18.4882 8.49924 18.4769 8.49949 18.4655 8.5L4.75 8.5C4.33578 8.5 4 8.16421 4 7.75C4 7.33579 4.33578 7 4.75 7L19 7C19.4142 7 19.75 7.33579 19.75 7.75C19.75 8.16421 19.4142 8.5 19 8.5H18.5339ZM6.75 18V10H9.25V18H6.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCrane4Icon implements OnInit {
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