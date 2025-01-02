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
  selector: 'svg[si-balloons-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.91016 3.25C5.78414 3.25 3.25 5.78414 3.25 8.91016C3.25 10.6972 3.84969 12.4875 4.83027 13.8444C5.65685 14.9882 6.80837 15.8898 8.16016 16.1385V20C8.16016 20.4142 8.49594 20.75 8.91016 20.75C9.32437 20.75 9.66016 20.4142 9.66016 20V16.1385C10.6373 15.9587 11.5098 15.4378 12.2306 14.7308C12.2679 14.7859 12.3059 14.8403 12.3447 14.8939C13.0316 15.8445 13.989 16.6102 15.1211 16.8509V20.0004C15.1211 20.4146 15.4569 20.7504 15.8711 20.7504C16.2853 20.7504 16.6211 20.4146 16.6211 20.0004V16.8511C17.7537 16.6109 18.7116 15.8449 19.3989 14.8939C20.238 13.7328 20.7502 12.203 20.7502 10.6753C20.7502 7.98102 18.5661 5.79688 15.8718 5.79688C15.166 5.79688 14.4952 5.94677 13.8895 6.21645C12.9317 4.44971 11.061 3.25 8.91016 3.25ZM14.4232 7.62234C14.8622 7.41365 15.3533 7.29688 15.8718 7.29688C17.7376 7.29688 19.2502 8.80944 19.2502 10.6753C19.2502 11.8863 18.8382 13.1089 18.1831 14.0153C17.5231 14.9287 16.6917 15.4299 15.8718 15.4299C15.0518 15.4299 14.2205 14.9287 13.5604 14.0153C13.4417 13.851 13.3309 13.6763 13.2292 13.4932C14.0672 12.1865 14.5703 10.5469 14.5703 8.91016C14.5703 8.46715 14.5194 8.03604 14.4232 7.62234ZM8.91016 14.707C7.87432 14.707 6.84755 14.0749 6.04603 12.9658C5.24949 11.8636 4.75 10.3805 4.75 8.91016C4.75 6.61257 6.61257 4.75 8.91016 4.75C11.2077 4.75 13.0703 6.61257 13.0703 8.91016C13.0703 10.3805 12.5708 11.8636 11.7743 12.9658C10.9728 14.0749 9.94599 14.707 8.91016 14.707Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBalloonsIcon implements OnInit {
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
