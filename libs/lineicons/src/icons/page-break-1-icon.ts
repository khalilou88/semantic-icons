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
  selector: 'svg[si-page-break-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.78125 9.74902C7.53861 9.74902 6.53125 8.74166 6.53125 7.49902L6.53125 4.21875C6.53125 2.97611 7.53861 1.96875 8.78125 1.96875H16.2812C17.5239 1.96875 18.5312 2.97611 18.5312 4.21875V7.49902C18.5312 8.74166 17.5239 9.74902 16.2812 9.74902L8.78125 9.74902ZM8.03125 7.49902C8.03125 7.91324 8.36704 8.24902 8.78125 8.24902L16.2812 8.24902C16.6955 8.24902 17.0312 7.91324 17.0312 7.49902V4.21875C17.0312 3.80454 16.6955 3.46875 16.2812 3.46875L8.78125 3.46875C8.36704 3.46875 8.03125 3.80454 8.03125 4.21875L8.03125 7.49902Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.78125 22.0303C7.53861 22.0303 6.53125 21.0229 6.53125 19.7803L6.53125 16.5C6.53125 15.2574 7.53861 14.25 8.78125 14.25H16.2812C17.5239 14.25 18.5312 15.2574 18.5312 16.5V19.7803C18.5312 21.0229 17.5239 22.0303 16.2812 22.0303H8.78125ZM8.03125 19.7803C8.03125 20.1945 8.36704 20.5303 8.78125 20.5303H16.2812C16.6955 20.5303 17.0312 20.1945 17.0312 19.7803V16.5C17.0312 16.0858 16.6955 15.75 16.2812 15.75H8.78125C8.36704 15.75 8.03125 16.0858 8.03125 16.5L8.03125 19.7803Z"
      fill="#323544"
    />
    <svg:path
      d="M5.78125 11.2803C5.36704 11.2803 5.03125 11.6161 5.03125 12.0303C5.03125 12.4445 5.36704 12.7803 5.78125 12.7803H7.46875C7.88296 12.7803 8.21875 12.4445 8.21875 12.0303C8.21875 11.6161 7.88296 11.2803 7.46875 11.2803H5.78125Z"
      fill="#323544"
    />
    <svg:path
      d="M10.8438 11.2803C10.4295 11.2803 10.0938 11.6161 10.0938 12.0303C10.0938 12.4445 10.4295 12.7803 10.8438 12.7803L14.2188 12.7803C14.633 12.7803 14.9688 12.4445 14.9688 12.0303C14.9688 11.6161 14.633 11.2803 14.2188 11.2803L10.8438 11.2803Z"
      fill="#323544"
    />
    <svg:path
      d="M17.5938 11.2803C17.1795 11.2803 16.8438 11.6161 16.8438 12.0303C16.8438 12.4445 17.1795 12.7803 17.5938 12.7803H19.2812C19.6955 12.7803 20.0312 12.4445 20.0312 12.0303C20.0312 11.6161 19.6955 11.2803 19.2812 11.2803H17.5938Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPageBreak1Icon implements OnInit {
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
