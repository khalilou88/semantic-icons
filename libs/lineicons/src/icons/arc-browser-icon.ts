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
  selector: 'svg[si-arc-browser-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.68655 15.1459L3.70082 17.2183C3.19905 18.2723 3.57612 19.5698 4.60936 20.1191C5.70494 20.701 7.0529 20.2467 7.58139 19.1393L8.48102 17.248C7.09179 16.8001 5.803 16.0862 4.68655 15.1459Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2622 6.35766C19.9834 6.30184 19.6963 6.30149 19.4174 6.35664C19.1385 6.41178 18.8732 6.52134 18.6366 6.67905C18.4 6.83676 18.1969 7.03954 18.0387 7.27579C17.8805 7.51205 17.7704 7.77715 17.7147 8.05596C17.5069 9.09514 17.0199 10.0631 16.3489 10.8855L18.3174 15.0303C20.1345 13.4537 21.4765 11.3071 21.9575 8.90512C22.1921 7.72937 21.432 6.58924 20.2622 6.35766Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.6793 13.2398C12.2577 13.3407 11.8272 13.3942 11.3967 13.3942C11.0612 13.3942 10.7138 13.3556 10.3664 13.2813C8.92645 12.9755 7.47754 12.0848 6.65808 11.0011C6.45321 10.7309 6.28695 10.4489 6.17115 10.1609C5.72282 9.05339 4.46097 8.51896 3.35351 8.96432C2.24605 9.41265 1.71162 10.6745 2.15698 11.782C2.66469 13.0408 3.56127 14.1958 4.68655 15.1459C5.80193 16.0861 7.0898 16.8001 8.47812 17.248C9.43119 17.5538 10.4199 17.7231 11.3937 17.7231C12.4745 17.7231 13.5404 17.536 14.5558 17.1946L12.6793 13.2398Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.3569 17.2095L16.3493 10.8824L16.3463 10.8853C16.3463 10.8853 16.3463 10.8824 16.3493 10.8824L13.4871 4.86111C13.3114 4.4917 13.0346 4.17962 12.6889 3.96103C12.3431 3.74243 11.9425 3.62626 11.5334 3.62598C10.6991 3.62598 9.93905 4.10697 9.57979 4.86111L6.6612 11.0011C7.48066 12.0848 8.92957 12.9756 10.3696 13.2814L11.3137 11.298C11.4028 11.111 11.67 11.111 11.7591 11.298L12.6825 13.2398L15.4853 19.1364C15.6608 19.5065 15.938 19.8191 16.2844 20.0378C16.6308 20.2565 17.0322 20.3722 17.4419 20.3715C17.6349 20.3715 17.8279 20.3448 18.0179 20.2913C19.3213 19.9321 19.9389 18.4327 19.3569 17.2095Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiArcBrowserIcon implements OnInit {
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