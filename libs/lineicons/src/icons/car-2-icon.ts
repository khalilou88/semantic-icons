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
  selector: 'svg[si-car-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 12.125C6.58579 12.125 6.25 12.4608 6.25 12.875C6.25 13.2892 6.58579 13.625 7 13.625H8.5C8.91421 13.625 9.25 13.2892 9.25 12.875C9.25 12.4608 8.91421 12.125 8.5 12.125H7Z"
      fill="#323544"
    />
    <svg:path
      d="M14.75 12.875C14.75 12.4608 15.0858 12.125 15.5 12.125H17C17.4142 12.125 17.75 12.4608 17.75 12.875C17.75 13.2892 17.4142 13.625 17 13.625H15.5C15.0858 13.625 14.75 13.2892 14.75 12.875Z"
      fill="#323544"
    />
    <svg:path
      d="M10.3763 2C10.0924 2 9.8329 2.16025 9.70575 2.41404L9.2869 3.25H7.69961C6.76139 3.25 5.92165 3.83218 5.59256 4.71079L4.64148 7.25H2.75C2.33579 7.25 2 7.58579 2 8C2 8.41421 2.33579 8.75 2.75 8.75H4.07964L4.03637 8.86552C3.14353 9.1639 2.5 10.0068 2.5 11V18C2.5 18.8284 3.17157 19.5 4 19.5C4.82843 19.5 5.5 18.8284 5.5 18V17H18.5V18C18.5 18.8284 19.1716 19.5 20 19.5C20.8284 19.5 21.5 18.8284 21.5 18V11C21.5 10.0073 20.8571 9.16474 19.965 8.86597L19.9215 8.75H21.25C21.6642 8.75 22 8.41421 22 8C22 7.58579 21.6642 7.25 21.25 7.25H19.3597L18.4086 4.71079C18.0795 3.83218 17.2398 3.25 16.3016 3.25H14.7131L14.2943 2.41404C14.1671 2.16025 13.9076 2 13.6237 2H10.3763ZM20 15.5H4V11C4 10.5858 4.33579 10.25 4.75 10.25H19.25C19.6642 10.25 20 10.5858 20 11V15.5ZM7.69961 4.75H16.3016C16.6143 4.75 16.8942 4.94406 17.0039 5.23693L18.3198 8.75H5.68141L6.99726 5.23693C7.10695 4.94406 7.38687 4.75 7.69961 4.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCar2Icon implements OnInit {
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
