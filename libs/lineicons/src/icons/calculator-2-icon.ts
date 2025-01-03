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
  selector: 'svg[si-calculator-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.5 5.75C7.5 5.33579 7.83579 5 8.25 5H15.75C16.1642 5 16.5 5.33579 16.5 5.75V7.25C16.5 7.66421 16.1642 8 15.75 8H8.25C7.83579 8 7.5 7.66421 7.5 7.25V5.75Z"
      fill="#343C54"
    />
    <svg:path
      d="M8.5 9.85C8.00294 9.85 7.6 10.2529 7.6 10.75C7.6 11.2471 8.00294 11.65 8.5 11.65C8.99706 11.65 9.4001 11.2471 9.4001 10.75C9.4001 10.2529 8.99706 9.85 8.5 9.85Z"
      fill="#343C54"
    />
    <svg:path
      d="M11.1 10.75C11.1 10.2529 11.5029 9.85 12 9.85C12.4971 9.85 12.9001 10.2529 12.9001 10.75C12.9001 11.2471 12.4972 11.65 12.0001 11.65C11.503 11.65 11.1 11.2471 11.1 10.75Z"
      fill="#343C54"
    />
    <svg:path
      d="M15.5 9.85C15.0029 9.85 14.6 10.2529 14.6 10.75C14.6 11.2471 15.0029 11.65 15.5 11.65C15.9971 11.65 16.4001 11.2471 16.4001 10.75C16.4001 10.2529 15.9971 9.85 15.5 9.85Z"
      fill="#343C54"
    />
    <svg:path
      d="M7.6 14.25C7.6 13.7529 8.00294 13.35 8.5 13.35C8.99706 13.35 9.4001 13.7529 9.4001 14.25C9.4001 14.7471 8.99716 15.15 8.5001 15.15C8.00304 15.15 7.6 14.7471 7.6 14.25Z"
      fill="#343C54"
    />
    <svg:path
      d="M12 13.35C11.5029 13.35 11.1 13.7529 11.1 14.25C11.1 14.7471 11.5029 15.15 12 15.15C12.4971 15.15 12.9001 14.7471 12.9001 14.25C12.9001 13.7529 12.4971 13.35 12 13.35Z"
      fill="#343C54"
    />
    <svg:path
      d="M14.6 14.25C14.6 13.7529 15.0029 13.35 15.5 13.35C15.9971 13.35 16.4001 13.7529 16.4001 14.25C16.4001 14.7471 15.9972 15.15 15.5001 15.15C15.003 15.15 14.6 14.7471 14.6 14.25Z"
      fill="#343C54"
    />
    <svg:path
      d="M8.5 16.85C8.00294 16.85 7.6 17.2529 7.6 17.75C7.6 18.2471 8.00294 18.65 8.5 18.65C8.99706 18.65 9.4001 18.2471 9.4001 17.75C9.4001 17.2529 8.99706 16.85 8.5 16.85Z"
      fill="#343C54"
    />
    <svg:path
      d="M11.1 17.75C11.1 17.2529 11.5029 16.85 12 16.85C12.4971 16.85 12.9001 17.2529 12.9001 17.75C12.9001 18.2471 12.4972 18.65 12.0001 18.65C11.503 18.65 11.1 18.2471 11.1 17.75Z"
      fill="#343C54"
    />
    <svg:path
      d="M15.5 16.85C15.0029 16.85 14.6 17.2529 14.6 17.75C14.6 18.2471 15.0029 18.65 15.5 18.65C15.9971 18.65 16.4001 18.2471 16.4001 17.75C16.4001 17.2529 15.9971 16.85 15.5 16.85Z"
      fill="#343C54"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 4.25C4.5 3.00736 5.50736 2 6.75 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V4.25ZM6.75 3.5C6.33579 3.5 6 3.83579 6 4.25V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25C17.6642 20.5 18 20.1642 18 19.75V4.25C18 3.83579 17.6642 3.5 17.25 3.5H6.75Z"
      fill="#343C54"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCalculator2Icon implements OnInit {
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