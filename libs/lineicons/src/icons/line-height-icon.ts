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
  selector: 'svg[si-line-height-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.754 4C12.754 3.58579 13.0898 3.25 13.504 3.25H20.5C20.9142 3.25 21.25 3.58579 21.25 4C21.25 4.41421 20.9142 4.75 20.5 4.75L13.504 4.75C13.0898 4.75 12.754 4.41421 12.754 4Z"
      fill="#323544"
    />
    <svg:path
      d="M20.5 13.9167L13.504 13.9167C13.0898 13.9167 12.754 14.2525 12.754 14.6667C12.754 15.0809 13.0898 15.4167 13.504 15.4167L20.5 15.4167C20.9142 15.4167 21.25 15.0809 21.25 14.6667C21.25 14.2525 20.9142 13.9167 20.5 13.9167Z"
      fill="#323544"
    />
    <svg:path
      d="M13.504 19.25C13.0898 19.25 12.754 19.5858 12.754 20C12.754 20.4142 13.0898 20.75 13.504 20.75H20.5C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25H13.504Z"
      fill="#323544"
    />
    <svg:path
      d="M20.5 10.0833L13.504 10.0833C13.0898 10.0833 12.754 9.74751 12.754 9.33329C12.754 8.91908 13.0898 8.58329 13.504 8.58329L20.5 8.58329C20.9142 8.58329 21.25 8.91908 21.25 9.33329C21.25 9.74751 20.9142 10.0833 20.5 10.0833Z"
      fill="#323544"
    />
    <svg:path
      d="M9.97387 16.4695L8.25206 18.1901L8.25206 5.8097L9.97395 7.5305C10.2669 7.8233 10.7418 7.82315 11.0346 7.53016C11.3274 7.23717 11.3273 6.7623 11.0343 6.4695L8.03237 3.4695C7.73952 3.17684 7.26492 3.17683 6.97206 3.46948L3.96996 6.46948C3.67696 6.76227 3.6768 7.23715 3.96959 7.53014C4.26238 7.82314 4.73725 7.82331 5.03025 7.53052L6.75206 5.80991L6.75206 18.1903L5.03016 16.4695C4.73718 16.1767 4.2623 16.1769 3.9695 16.4698C3.6767 16.7628 3.67685 17.2377 3.96984 17.5305L6.97174 20.5305C7.26459 20.8232 7.73919 20.8232 8.03205 20.5305L11.0342 17.5305C11.3271 17.2377 11.3273 16.7629 11.0345 16.4699C10.7417 16.1769 10.2669 16.1767 9.97387 16.4695Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLineHeightIcon implements OnInit {
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
