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
  selector: 'svg[si-layout-26-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.7734 2.75C12.7734 2.33579 12.4377 2 12.0234 2C11.6092 2 11.2734 2.33579 11.2734 2.75V4.5L6.02344 4.5V2.75C6.02344 2.33579 5.68765 2 5.27344 2C4.85922 2 4.52344 2.33579 4.52344 2.75V4.5L2.77344 4.5C2.35922 4.5 2.02344 4.83579 2.02344 5.25C2.02344 5.66421 2.35922 6 2.77344 6L4.52344 6V11.25H2.77344C2.35922 11.25 2.02344 11.5858 2.02344 12C2.02344 12.4142 2.35922 12.75 2.77344 12.75H4.52344L4.52344 18H2.77344C2.35922 18 2.02344 18.3358 2.02344 18.75C2.02344 19.1642 2.35922 19.5 2.77344 19.5H4.52344V21.25C4.52344 21.6642 4.85922 22 5.27344 22C5.68765 22 6.02344 21.6642 6.02344 21.25V19.5H11.2734V21.25C11.2734 21.6642 11.6092 22 12.0234 22C12.4377 22 12.7734 21.6642 12.7734 21.25V19.5H18.0234V21.25C18.0234 21.6642 18.3592 22 18.7734 22C19.1877 22 19.5234 21.6642 19.5234 21.25V19.5H21.2734C21.6877 19.5 22.0234 19.1642 22.0234 18.75C22.0234 18.3358 21.6877 18 21.2734 18H19.5234V12.75H21.2734C21.6877 12.75 22.0234 12.4142 22.0234 12C22.0234 11.5858 21.6877 11.25 21.2734 11.25H19.5234V6L21.2734 6C21.6877 6 22.0234 5.66421 22.0234 5.25C22.0234 4.83578 21.6877 4.5 21.2734 4.5L19.5234 4.5V2.75C19.5234 2.33579 19.1877 2 18.7734 2C18.3592 2 18.0234 2.33579 18.0234 2.75V4.5L12.7734 4.5V2.75ZM18.0234 18L12.7734 18L12.7734 12.75L18.0234 12.75V18ZM11.2734 18L6.02344 18L6.02344 12.75L11.2734 12.75L11.2734 18ZM6.02344 11.25L6.02344 6L11.2734 6V11.25L6.02344 11.25ZM18.0234 11.25L12.7734 11.25V6L18.0234 6V11.25Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLayout26Icon implements OnInit {
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