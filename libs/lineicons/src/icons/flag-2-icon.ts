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
  selector: 'svg[si-flag-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.27344 3.41016C6.27344 2.99594 5.93765 2.66016 5.52344 2.66016C5.10922 2.66016 4.77344 2.99594 4.77344 3.41016V21.9102C4.77344 22.3244 5.10922 22.6602 5.52344 22.6602C5.93765 22.6602 6.27344 22.3244 6.27344 21.9102V15.9102H11.5234C11.5234 17.1528 12.5308 18.1602 13.7734 18.1602H19.0234C19.2779 18.1602 19.5151 18.0311 19.6533 17.8174C19.7914 17.6037 19.8118 17.3345 19.7074 17.1024L17.7344 12.7179C17.6463 12.5222 17.6463 12.2981 17.7344 12.1024L19.7074 7.71793C19.8118 7.48585 19.7914 7.21664 19.6533 7.00293C19.5151 6.78921 19.2779 6.66016 19.0234 6.66016H13.0234C13.0234 5.41752 12.0161 4.41016 10.7734 4.41016H6.27344V3.41016ZM6.27344 5.91016H10.7734C11.1877 5.91016 11.5234 6.24594 11.5234 6.66016V14.4102H6.27344V5.91016ZM13.0234 8.16016H17.8635L16.3665 11.4868C16.1023 12.074 16.1023 12.7463 16.3665 13.3335L17.8635 16.6602H13.7734C13.3592 16.6602 13.0234 16.3244 13.0234 15.9102V8.16016Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFlag2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}