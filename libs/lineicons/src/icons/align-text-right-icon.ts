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
  selector: 'svg[si-align-text-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.0234 4.5C20.4377 4.5 20.7734 4.83579 20.7734 5.25C20.7734 5.66421 20.4377 6 20.0234 6L9.02344 6C8.60922 6 8.27344 5.66421 8.27344 5.25C8.27344 4.83579 8.60922 4.5 9.02344 4.5H20.0234Z"
      fill="#323544"
    />
    <svg:path
      d="M20.0234 9C20.4377 9 20.7734 9.33579 20.7734 9.75C20.7734 10.1642 20.4377 10.5 20.0234 10.5L4.02344 10.5C3.60922 10.5 3.27344 10.1642 3.27344 9.75C3.27344 9.33579 3.60922 9 4.02344 9L20.0234 9Z"
      fill="#323544"
    />
    <svg:path
      d="M20.0234 18C20.4377 18 20.7734 18.3358 20.7734 18.75C20.7734 19.1642 20.4377 19.5 20.0234 19.5L4.02344 19.5C3.60922 19.5 3.27344 19.1642 3.27344 18.75C3.27344 18.3358 3.60922 18 4.02344 18L20.0234 18Z"
      fill="#323544"
    />
    <svg:path
      d="M20.7734 14.25C20.7734 13.8358 20.4377 13.5 20.0234 13.5L9.02344 13.5C8.60922 13.5 8.27344 13.8358 8.27344 14.25C8.27344 14.6642 8.60922 15 9.02344 15L20.0234 15C20.4377 15 20.7734 14.6642 20.7734 14.25Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAlignTextRightIcon implements OnInit {
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