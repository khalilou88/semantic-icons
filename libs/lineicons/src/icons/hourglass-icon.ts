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
  selector: 'svg[si-hourglass-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 3.25C3.58579 3.25 3.25 3.58579 3.25 4C3.25 4.41421 3.58579 4.75 4 4.75H5.25V6.00002C5.25 8.61221 6.73382 10.8778 8.90458 12C6.73382 13.1222 5.25 15.3878 5.25 18L5.25 19.25H4C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75L20 20.75C20.4142 20.75 20.75 20.4142 20.75 20C20.75 19.5858 20.4142 19.25 20 19.25H18.75V18C18.75 15.3878 17.2662 13.1222 15.0954 12C17.2662 10.8778 18.75 8.61221 18.75 6.00002V4.75H20C20.4142 4.75 20.75 4.41421 20.75 4C20.75 3.58579 20.4142 3.25 20 3.25H4ZM11.9898 12.75C11.9932 12.75 11.9966 12.75 12 12.75C12.0034 12.75 12.0068 12.75 12.0102 12.75C14.905 12.7555 17.25 15.1039 17.25 18V19.25L6.75 19.25L6.75 18C6.75 15.1039 9.09501 12.7555 11.9898 12.75ZM12.01 11.25C12.0067 11.25 12.0033 11.25 12 11.25C11.9967 11.25 11.9933 11.25 11.99 11.25C9.09508 11.2446 6.75 8.89616 6.75 6.00002V4.75H17.25V6.00002C17.25 8.89616 14.9049 11.2446 12.01 11.25Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHourglassIcon implements OnInit {
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