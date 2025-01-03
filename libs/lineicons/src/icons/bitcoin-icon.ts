import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-bitcoin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.7379 15.0481C11.6329 15.2846 13.5907 15.802 13.9022 14.5515C14.2201 13.2734 12.3227 12.8476 11.3969 12.6398C11.2935 12.6166 11.2022 12.5961 11.1275 12.5775L10.525 14.9928C10.5861 15.008 10.6578 15.0269 10.7379 15.0481Z"
      fill="#323544"
    />
    <svg:path
      d="M11.5831 11.519C12.3299 11.7183 13.9576 12.1525 14.2412 11.0165C14.5311 9.85438 12.9483 9.5041 12.1752 9.33303C12.0883 9.3138 12.0117 9.29683 11.949 9.28123L11.4028 11.4718C11.4545 11.4847 11.5151 11.5009 11.5831 11.519Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22.4609C17.5228 22.4609 22 17.9838 22 12.4609C22 6.93809 17.5228 2.46094 12 2.46094C6.47715 2.46094 2 6.93809 2 12.4609C2 17.9838 6.47715 22.4609 12 22.4609ZM14.2097 8.51311C15.595 8.9903 16.6081 9.70561 16.4093 11.0362C16.2653 12.0103 15.725 12.4818 15.0081 12.6478C15.9925 13.1606 16.4931 13.9465 16.0159 15.309C15.4243 17.0009 14.0172 17.1437 12.1462 16.7896L11.6922 18.6093L10.595 18.3359L11.0431 16.5406C10.7587 16.4699 10.4681 16.3949 10.169 16.3137L9.71905 18.1174L8.62312 17.844L9.07718 16.0206C8.97658 15.9948 8.87531 15.9684 8.77331 15.9417C8.61579 15.9007 8.45653 15.8591 8.29531 15.8187L6.86719 15.4628L7.41187 14.2065C7.41187 14.2065 8.22031 14.4215 8.20937 14.4056C8.51999 14.4825 8.6578 14.28 8.71218 14.145L9.94342 9.20717C9.95717 8.97405 9.87655 8.67999 9.43217 8.56905C9.44936 8.55749 8.6353 8.37093 8.6353 8.37093L8.92718 7.19906L10.4403 7.57687L10.439 7.58249C10.6665 7.63905 10.9009 7.6928 11.1397 7.74718L11.5894 5.94531L12.6859 6.21875L12.2453 7.9853C12.5397 8.05249 12.8359 8.1203 13.124 8.19218L13.5615 6.43719L14.659 6.71062L14.2097 8.51311Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBitcoinIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
