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
  selector: 'svg[si-colour-palette-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.0279 7.22682C15.516 6.73867 16.3075 6.73867 16.7956 7.22682C17.2838 7.71498 17.2839 8.50651 16.7957 8.99466C16.3075 9.48282 15.5161 9.48282 15.0279 8.99466C14.5398 8.50651 14.5397 7.71498 15.0279 7.22682Z"
      fill="#323544"
    />
    <svg:path
      d="M9.01828 15.0053C8.53013 14.5171 7.73867 14.5171 7.25052 15.0053C6.76236 15.4934 6.76236 16.2849 7.25052 16.773C7.73867 17.2612 8.5302 17.2613 9.01836 16.7731C9.50651 16.2849 9.50644 15.4934 9.01828 15.0053Z"
      fill="#323544"
    />
    <svg:path
      d="M7.0341 9.369C7.70093 9.54768 8.09666 10.2331 7.91798 10.8999C7.7393 11.5668 7.05386 11.9626 6.38702 11.7839C5.72019 11.6052 5.32446 10.9198 5.50314 10.253C5.68182 9.58615 6.36726 9.19032 7.0341 9.369Z"
      fill="#323544"
    />
    <svg:path
      d="M10.9228 7.89465C11.5896 7.71598 11.9853 7.03056 11.8067 6.36372C11.628 5.69689 10.9426 5.30116 10.2757 5.47984C9.60889 5.65852 9.21306 6.34396 9.39174 7.0108C9.57042 7.67763 10.2559 8.07333 10.9228 7.89465Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.02344 12C2.02344 6.47715 6.50059 2 12.0234 2C17.5463 2 22.0234 6.47715 22.0234 12C22.0234 12.7351 21.4156 13.2734 20.7352 13.2734H17.0372C15.3782 13.2734 14.0332 14.6184 14.0332 16.2775C14.0332 17.0726 14.3484 17.8353 14.9098 18.3984C15.4491 18.9393 15.6486 19.6836 15.5 20.3542C15.3477 21.042 14.8269 21.6373 14.0164 21.8012C13.3717 21.9317 12.7052 22 12.0234 22C6.50059 22 2.02344 17.5228 2.02344 12ZM12.0234 3.5C7.32902 3.5 3.52344 7.30558 3.52344 12C3.52344 16.6944 7.32902 20.5 12.0234 20.5C12.6047 20.5 13.1717 20.4418 13.7189 20.331C13.9076 20.2929 14.0023 20.18 14.0355 20.0297C14.0727 19.8622 14.028 19.6385 13.8476 19.4575C13.0059 18.6132 12.5332 17.4696 12.5332 16.2775C12.5332 13.79 14.5497 11.7734 17.0372 11.7734H20.5205C20.4004 7.18374 16.6421 3.5 12.0234 3.5Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiColourPalette3Icon implements OnInit {
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